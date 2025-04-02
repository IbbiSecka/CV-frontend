import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Montserrat, Roboto, EB_Garamond } from "next/font/google";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

// Load Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});
/*const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-garamond",
  display: "swap",
});*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link href= "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-white text-[#1a1a1a]">
        <Navbar />
        <main className=" mx-auto px-4  ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
