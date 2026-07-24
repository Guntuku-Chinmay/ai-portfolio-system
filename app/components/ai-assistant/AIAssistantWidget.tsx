"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, MessageCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatWindow from "./ChatWindow";
import { Message } from "./MessageList";
import { getAIResponse } from "../../lib/aiAssistant";

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Initialize with a welcome message or load from sessionStorage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("chinmay-ai-chat-history");
      if (saved) {
        const parsed = JSON.parse(saved);
        const loadedMessages = parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp),
        }));
        setMessages(loadedMessages);
      } else {
        const initialMsg: Message = {
          id: "welcome",
          sender: "ai",
          text: "Hi there! I'm Chinmay's AI Portfolio Assistant. 🚀\n\nI can tell you all about Chinmay's **projects**, **skills**, **journey**, **current focus**, or how to **contact** him. What would you like to know?",
          timestamp: new Date(),
        };
        setMessages([initialMsg]);
        sessionStorage.setItem("chinmay-ai-chat-history", JSON.stringify([initialMsg]));
      }
    } catch (e) {
      console.error("Failed to load chat history", e);
    }

    // Show tooltip after a short delay to invite interaction
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip automatically after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 11000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Save messages to sessionStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem("chinmay-ai-chat-history", JSON.stringify(messages));
      } catch (e) {
        console.error("Failed to save chat history", e);
      }
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    // 1. Add user message
    const userMessage: Message = {
      id: Math.random().toString(),
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setShowTooltip(false);

    try {
      // 2. Fetch response from assistant service
      const aiText = await getAIResponse(text);

      const aiMessage: Message = {
        id: Math.random().toString(),
        sender: "ai",
        text: aiText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("AI response error:", error);
      const errorMessage: Message = {
        id: Math.random().toString(),
        sender: "ai",
        text: "Oops, I encountered a connection issue. Please try again or contact Chinmay directly using the form below! 📬",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chat Window Container with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-4 left-4 md:left-auto md:right-6 md:w-[380px] z-50 pointer-events-auto"
          >
            <ChatWindow
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              messages={messages}
              isTyping={isTyping}
              onSendMessage={handleSendMessage}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-auto">
        {/* Hover / Auto Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-purple-950/90 border border-purple-500/30 text-purple-100 text-xs px-3.5 py-2 rounded-xl backdrop-blur-md shadow-lg shadow-purple-900/20 max-w-[200px] leading-relaxed hidden sm:block"
            >
              <div className="flex items-center gap-1.5 font-medium">
                <Sparkles size={12} className="text-purple-400" />
                Ask Chinmay AI
              </div>
              <p className="text-[10px] text-gray-300 mt-0.5">Learn about my skills & projects!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Action Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer transition-all duration-300 border focus:outline-none ${
            isOpen
              ? "bg-purple-950 border-purple-500/40 shadow-purple-500/10"
              : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border-white/20 shadow-purple-600/30 hover:shadow-purple-500/50"
          }`}
          aria-label="Toggle AI Assistant"
        >
          {/* Subtle Outer Pulse Ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping pointer-events-none" />
          )}

          {/* Icon switches / rotates */}
          <motion.div
            key={isOpen ? "open" : "closed"}
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <Sparkles size={24} className="text-purple-400" />
            ) : (
              <MessageSquare size={24} />
            )}
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}
