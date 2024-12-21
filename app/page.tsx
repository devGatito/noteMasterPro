"use client";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Layout from "@/components/Layout";
export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showContent && <SplashScreen />}
      {showContent && (
        <>
          <Layout />
        </>
      )}
    </>
  );
}
