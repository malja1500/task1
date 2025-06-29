"use client";

import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "../styles/Auth.module.scss";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const validatePhone = (number: string) => {
    const regex = /^09\d{9}$/; 
    return regex.test(number);
  };

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError("شماره موبایل معتبر نیست!");
      return;
    }
    setError(""); 

    
    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();
    const user = data.results[0];

    
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/dashboard");
  };

  return (
    <div className={styles.authContainer}>
      <h1>ورود</h1>
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="شماره موبایل"
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
}
