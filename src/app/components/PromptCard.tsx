"use client";

import React, { useState } from "react";

interface PromptCardProps {
  prompt: string;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [response, setResponse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission here (save to database, etc.)
    console.log("Response:", response);
    setResponse("");
  };

  return (
    <div className="w-full max-w-xl bg-zinc-100 dark:bg-zinc-900 rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
        {prompt}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Type your response here..."
          className="w-full h-32 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="self-end px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}