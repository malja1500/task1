"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Dashboard.module.scss";

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/auth"); 
    } else {
      setUser(JSON.parse(storedUser)); 
    }
  }, [router]);

  return (
    <div className={styles.dashboardContainer}>
      <h1>Welcome to the Dashboard</h1>
      {user && (
        <p className={styles.welcomeMessage}>
          {`Welcome, ${user.name.first} ${user.name.last}`}
        </p>
      )}
    </div>
  );
};

export default DashboardPage;
