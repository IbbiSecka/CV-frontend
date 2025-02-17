import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <h1 className="text-lg font-bold">Ibrahima Secka<p className="text-sm">/ Software Developer </p></h1> 
      <div>
        <Link href="/resume" className="mx-2">Resume</Link>
        <Link href="/projects" className="mx-2">Projects</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
      </div>
    </nav>
  );
}