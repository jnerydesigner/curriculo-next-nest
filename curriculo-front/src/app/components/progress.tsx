"use client";

import { useState, useEffect } from "react";

import { Progress as ProgressChad } from "@/components/ui/progress";

interface ProgressProps {
  value: number;
}

export function Progress({ value }: ProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <ProgressChad value={progress} className="w-[60%] mb-1 bg-slate-200" />
  );
}
