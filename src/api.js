export async function checkQuestion(text) {
    try {
        const response = await fetch("http://localhost:5000/api/ai/question-check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        if (!response.ok) throw new Error("Network error");

        const data = await response.json();  // ✅ only once
        console.log('DATA:', data);
        return data;                         // ✅ return same object

    } catch (err) {
        console.error(err);
        return { isQuestion: false, rewrittenQuestion: text };
    }
}
