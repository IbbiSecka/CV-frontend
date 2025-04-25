

// app/services/apiClient.ts
class ApiClient {
  
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  

  constructor() {
    // Determine the correct base URL based on environment
    this.baseUrl = this.getBaseUrl();
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      // Add any API-specific headers here
    };
  }
  

  private getBaseUrl(): string {
    // Use different env vars for dev/prod
    const baseUrl = process.env.NODE_ENV === 'production'
      ? process.env.API_BASE_URL_PROD
      : process.env.API_BASE_URL_DEV;

    // Validate URL exists
    if (!baseUrl) {
      const envType = process.env.NODE_ENV === 'production' ? 'production' : 'development';
      throw new Error(`API base URL for ${envType} is not configured`);
    }
    if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}


    // Remove trailing slash if present
    return baseUrl.replace(/\/$/, '');
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await this.parseError(response);
      throw new ApiError(
        errorData.message || 'Request failed',
        response.status,
        errorData
      );
    }
    return response.json();
  }

  private async parseError(response: Response): Promise<any> {
    try {
      return await response.json();
    } catch {
      return { message: `HTTP error! status: ${response.status}` };
    }
  }

  public async get<T>(
  endpoint: string,
  options?: {
    params?: Record<string, string>;
  } & RequestInit & {
    next?: { revalidate?: number };
  }
): Promise<T> {
  try {
    const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = new URL(`${this.baseUrl}${normalizedEndpoint}`);

    if (options?.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const { params, ...fetchOptions } = options ?? {};

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: this.defaultHeaders,
      ...fetchOptions, // this includes `next`, `cache`, etc.
    });

    return this.handleResponse<T>(response);
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

  // Add post(), put(), delete() methods if needed later
}

class ApiError extends Error {
  constructor(
    public message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}


export const apiClient = new ApiClient();