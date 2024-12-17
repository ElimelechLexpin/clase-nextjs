import Link from "next/link"

export default function Navbar(){
  return(
    <nav className="h-[60px] bg-slate-400 flex justify-between items-center px-10">
      <p>LOGO</p>
      <ul className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  )
};