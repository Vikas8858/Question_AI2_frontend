// frontend/src/components/InputBox.jsx
import React, { useState } from 'react';

function InputBox({ onSubmit }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSubmit(text);
        }
    };

    return ( <
        form onSubmit = {
            handleSubmit
        }
        className = "flex flex-col space-y-4" >
        <
        textarea className = "w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows = "4"
        placeholder = "Apna statement ya question yahan likhein..."
        value = {
            text
        }
        onChange = {
            (e) => setText(e.target.value)
        }
        /> <
        button type = "submit"
        className = "bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200" >
        Process 
        </button> </form>
    );
}

export default InputBox;