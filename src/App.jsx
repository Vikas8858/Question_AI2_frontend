import { useState } from "react";
import { checkQuestion } from "./api";
import ResultCard from "./components/ResultCard";
import { Loader2 } from "lucide-react"; // spinner icon

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setLoading(true);
    const res = await checkQuestion(text);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          ✨ AI Question Checker
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Type an English/Hinglish sentence and check if it’s a question.
        </p>

        <textarea
          className="border-2 border-gray-200 p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none transition"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your sentence here..."
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 active:scale-95 transition disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" />
              Checking...
            </>
          ) : (
            "Check Question"
          )}
        </button>

        {result && (
          <div className="mt-6">
            <ResultCard data={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
