"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <div className="text-center">
           <img src="/icon.png" alt="logoScreen"/>
          <h1 className="text-4xl font-bold mt-4">NoteMaster Pro</h1>
          <p className="text-lg text-gray-400 mt-2">
            Tu espacio digital para crear y colaborar...
          </p>
        </div>
      </div>
    );
  }

  return null;
}
