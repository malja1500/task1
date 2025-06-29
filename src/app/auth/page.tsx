"use client";

import { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import styles from "../components/styles/Auth.module.scss";

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!phone) {
      setError("لطفاً شماره وارد کنید.");
      return;
    }

    if (!validatePhone(phone)) {
      setError("شماره موبایل معتبر نیست!");
      return;
    }

    setError(""); 

  
    toast.info("در حال ورود به پنل...");

    
    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();
    const user = data.results[0];

  
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/dashboard");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  
  const validatePhone = (number: string) => {
    const regex = /^09\d{9}$/;
    return regex.test(number);
  };

  return (
    <div className={styles.authContainer}>
      <h1>ورود</h1>
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="شماره موبایل"
        onKeyDown={handleKeyDown} 
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleLogin}>ورود</Button>
      <ToastContainer /> 
    </div>
  );
}
