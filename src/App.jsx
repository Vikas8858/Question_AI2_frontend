import { useState } from "react";
import { checkQuestion } from "./api";

function App() {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const res = await checkQuestion(text);
        setResult(res);
        setLoading(false);
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <textarea
                className="border p-2 w-full rounded"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type English/Hinglish sentence..."
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                onClick={handleSubmit}
            >
                Check Question
            </button>

            {loading && <p>Loading...</p>}

            {result && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                    <p><strong>Is Question:</strong> {result.isQuestion ? "Yes" : "No"}</p>
                    <p><strong>Rewritten Question:</strong></p>
                    <pre>{result.rewrittenQuestion}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
