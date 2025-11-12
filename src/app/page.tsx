import Image from "next/image";
import React from "react";
import Prompts from "./prompts.json";
import PromptCard from "./components/PromptCard";

function getTodayISO() {
  const d = new Date();
  // Keep to device-local date for the landing mock
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// Simple deterministic hash (murmur-ish style but tiny) for demo only
function tinyHash(input: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickPrompt(seed: string, dateISO: string) {
  const key = `${seed}-${dateISO}`;
  const idx = tinyHash(key) % Prompts.length;
  return Prompts[idx];
}

function formatDate(dateISO: string) {
  const [year, month, day] = dateISO.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function LandingPage() {
  const today = getTodayISO();
  const seed = "demo-seed";
  const todayPrompt = pickPrompt(seed, today);
  const formattedDate = formatDate(today);


  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-12 py-32 px-6 bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
            Hi there 👋
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {formattedDate}
          </p>
        </div>

        <PromptCard prompt={todayPrompt.text} />
      </main>
    </div>
  );
}
