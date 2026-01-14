"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import './style.css'



 const navLinks = [
  {name: "Register", href: "/Register" },
  {name: "Login", href: "/Login" },
  {name: "forgot-password", href: "forgot-password" },
 ]

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("")

  const pathName = usePathname()
  return (
    <html lang="en">
      <body>
        <div>
          <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} />
          </div>
          {navLinks.map((link) => {
            const isActive = pathName === link.href ||
             (pathName.startsWith(link.href) && link.href !== "/")
            return (
              <Link className={isActive ? "font-bold mr-9" : "text-blue-500 mr-4" } href={link.href} key={link.name}> {link.name} 
              </Link>
            )
          })}
      
      
        {children}
        <footer 
        style={{
          backgroundColor: "grey",
          padding: "1rem",
          
        }}>
            <p>Footer</p>
        </footer>
            
        </div>
      </body>
      
    </html>
  );
}
