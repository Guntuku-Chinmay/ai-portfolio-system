"use client";

import React, { useEffect, useRef } from "react";

export interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

export default function MessageList({ messages, isTyping }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const renderMessageText = (text: string) => {
    return text.split("\n").map((line, i) => {
      // Process bold text formatting: **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const content = parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={j} className="font-bold text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      return (
        <p key={i} className="min-h-[1.25rem] leading-relaxed text-gray-200">
          {content}
        </p>
      );
    });
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
      {messages.map((msg) => {
        const isUser = msg.sender === "user";
        return (
          <div
            key={msg.id}
            className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
          >
            <div
              className={`px-4 py-2.5 text-sm shadow-md max-w-[85%] ${
                isUser
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl rounded-tr-none border border-blue-500/20"
                  : "bg-white/10 border border-white/5 text-gray-200 rounded-2xl rounded-tl-none backdrop-blur-md"
              }`}
            >
              {renderMessageText(msg.text)}
            </div>
            <span className="text-[10px] text-gray-500 mt-1 px-1">
              {msg.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        );
      })}

      {isTyping && (
        <div className="flex flex-col items-start">
          <div className="bg-white/10 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 backdrop-blur-md shadow-md">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
