
import React, { useState } from "react";
import { Send } from "lucide-react";

function InputBox({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText(""); // submit ke baad clear
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white border border-gray-200 shadow-lg rounded-2xl p-5 space-y-4"
    >
      <textarea
        className="w-full p-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 resize-none transition"
        rows="4"
        placeholder="Apna statement ya question yahan likhein..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-5 rounded-xl shadow-md hover:opacity-90 active:scale-95 transition"
      >
        <Send className="w-5 h-5" />
        Process
      </button>
    </form>
  );
}

export default InputBox;
