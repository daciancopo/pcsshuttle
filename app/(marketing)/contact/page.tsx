"use client";
import Contact from "@/app/components/Contact";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      <Contact />
    </section>
  );
}