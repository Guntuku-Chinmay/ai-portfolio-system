"use client";

import React from "react";
import { X, Sparkles } from "lucide-react";
import Image from "next/image";
import MessageList, { Message } from "./MessageList";
import MessageInput from "./MessageInput";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (text: string) => void;
}

const SUGGESTIONS = [
  { label: "🙋‍♂️ About Chinmay", text: "Tell me about Chinmay." },
  { label: "☁️ AWS Projects", text: "Explain your AWS projects." },
  { label: "💼 PM Experience", text: "What Product Management experience do you have?" },
  { label: "⭐ Proudest Project", text: "Which project are you most proud of?" },
  { label: "📬 Contact info", text: "How can I contact you?" },
];

export default function ChatWindow({
  isOpen,
  onClose,
  messages,
  isTyping,
  onSendMessage,
}: ChatWindowProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-24 right-4 left-4 md:left-auto md:right-6 md:w-[380px] h-[550px] max-h-[calc(100vh-120px)] rounded-2xl border border-white/10 bg-[#0a0d24]/85 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative p-4 border-b border-white/10 bg-black/40 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-purple-900/40 flex items-center justify-center">
            {/* Fallback to Sparkles icon if image fails to load or during development */}
            <Image
              src="/chinmay.jpg"
              alt="Chinmay AI"
              fill
              sizes="40px"
              className="object-cover"
              priority
              onError={(e) => {
                // If image fails, replace with placeholder or hide
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <Sparkles size={18} className="text-purple-400 absolute" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-semibold text-white">Ask Chinmay AI</h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[11px] text-gray-400">Assistant • Online</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>

      {/* Message List */}
      <MessageList messages={messages} isTyping={isTyping} />

      {/* Quick Suggestions */}
      {messages.length === 1 && !isTyping && (
        <div className="px-4 pb-2 z-10">
          <p className="text-[11px] text-gray-400 mb-2 font-medium">Frequently Asked Questions:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => onSendMessage(suggestion.text)}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/40 transition duration-200 cursor-pointer"
              >
                {suggestion.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Horizontal suggestions for ongoing chat (compact list) */}
      {messages.length > 1 && !isTyping && (
        <div className="px-4 pb-2 z-10 flex gap-2 overflow-x-auto no-scrollbar mask-gradient-right">
          {SUGGESTIONS.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => onSendMessage(suggestion.text)}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white hover:bg-purple-600/10 hover:border-purple-500/35 transition duration-200 cursor-pointer whitespace-nowrap"
            >
              {suggestion.label}
            </button>
          ))}
        </div>
      )}

      {/* Message Input */}
      <MessageInput
        onSendMessage={onSendMessage}
        disabled={isTyping}
      />
    </div>
  );
}
