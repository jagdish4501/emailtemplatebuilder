"use client";
import { useState, ChangeEvent, KeyboardEvent } from "react";

const ContentEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const productInfo = {
    productName: "Awesome Gadget",
    price: 99.99,
    category: "Electronics",
    launchDate: "2024-09-15",
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement;
    const cursorPosition = textarea.selectionStart;

    // Detect if '{{' has been typed and Tab is pressed
    if (e.key === "Tab") {
      const textBeforeCursor = content.slice(0, cursorPosition);
      const textAfterCursor = content.slice(cursorPosition);

      if (textBeforeCursor.endsWith("{{")) {
        e.preventDefault();
        const newText = textBeforeCursor + "}}" + textAfterCursor;
        setContent(newText);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = cursorPosition + 2;
        }, 0);
      }
    }
  };

  const replacePlaceholders = (content: string): string => {
    return content.replace(/{{(.*?)}}/g, (match, key) => {
      const value = productInfo[key as keyof typeof productInfo];
      return value !== undefined ? value.toString() : "null";
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Content Editor</h1>

      <textarea
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Add the keydown event listener
        placeholder="Enter your content here, use {{var_name}} for dynamic values."
        rows={10}
        className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <h2 className="text-xl font-semibold mt-6 mb-2">Preview:</h2>

      <div
        className="p-4 bg-gray-100 border rounded-md"
        style={{ whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{ __html: replacePlaceholders(content) }}
      />
    </div>
  );
};

export default ContentEditor;
