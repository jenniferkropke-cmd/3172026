import { useEffect } from "react";

export function MetricoolTracker() {
  useEffect(() => {
    // Load Metricool tracking script
    const loadScript = (callback: () => void) => {
      const head = document.getElementsByTagName("head")[0];
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://tracker.metricool.com/resources/be.js";
      script.onreadystatechange = callback;
      script.onload = callback;
      head.appendChild(script);
    };

    loadScript(() => {
      if (typeof (window as any).beTracker !== "undefined") {
        (window as any).beTracker.t({
          hash: "9d2ecd3c3e49a9cc8dcd7c3e2a79c57d",
        });
      }
    });
  }, []);

  return null; // This component renders nothing visible
}
