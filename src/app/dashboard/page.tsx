"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Dashboard.module.scss";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth");
    }
  }, [router]);

  return (
    <div className={styles.dashboardContainer}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
