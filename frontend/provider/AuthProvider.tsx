"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const isAuth = false;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.replace("/auth");
    }
  }, [router]);

  return <>{children}</>;
};
