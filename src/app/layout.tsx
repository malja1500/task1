"use client";  

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      
      router.push("/dashboard");
    } else {
      
      router.push("/auth");
    }
  }, [router]); 

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
