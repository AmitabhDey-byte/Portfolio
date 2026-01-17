"use client";

import { useEffect } from "react";
import "./Background.css";

export default function Background() {
  useEffect(() => {
    if (window.UnicornStudio?.isInitialized) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js";
    script.async = true;

    script.onload = () => {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg">
      <div data-us-project="zZYnvSJSzq2Xw1qUa4f7" />
    </div>
  );
}
