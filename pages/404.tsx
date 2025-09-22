// app/404/page.tsx
"use client";

import { useEffect } from "react";
import EmptyState from "../app/components/EmptyState";

export default function Custom404() {
  // Client-side loggning
  useEffect(() => {
    console.error("Page not found: 404");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <EmptyState
        title="Damnit, the page is missing!"
        subtitle="Please consult Oa for assistance."
      />
    </div>
  );
}
