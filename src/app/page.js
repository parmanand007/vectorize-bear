"use client";

import Modal from "../components/UpgradePlanModal";
import Plans from "../components/Plans";
import { useEffect } from "react";
import { redirect } from "next/navigation";
export default function Home() {
  useEffect(() => {
    redirect("/vectorizeImage");
  }, []);
  return (
    <main className="">
      <Plans />
    </main>
  );
}
