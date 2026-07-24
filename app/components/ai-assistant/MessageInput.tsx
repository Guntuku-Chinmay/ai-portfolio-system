"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  disabled: boolean;
}

export default function MessageInput({ onSendMessage, disabled }: MessageInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSendMessage(text.trim());
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t border-white/10 bg-black/40 flex items-center gap-2"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        disabled={disabled}
        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/30 transition disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={!text.trim() || disabled}
        className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-purple-600/10 cursor-pointer flex items-center justify-center"
      >
        <Send size={16} />
      </button>
    </form>
  );
}
