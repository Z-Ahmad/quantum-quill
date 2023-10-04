'use client'
import React, { useState } from "react";
import { countSyllables} from "@/lib/api"; 
import { generateLine } from "@/lib/api";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Create() {
  const [syllableCounts, setSyllableCounts] = useState<{ line: string; syllables: number }[]>([]);
  const [inputLines, setInputLines] = useState<string[]>(["", "", ""]); // Initialize with empty lines

  const handleLineChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputLines = [...inputLines];
    newInputLines[index] = e.target.value;
    setInputLines(newInputLines);
  };

  const handleCountSyllables = async (index: number) => {
    const line = inputLines[index];

    // Split the line into individual words
    const words = line.split(" ");
    // console.log(words)

    // Initialize a variable to store the total syllable count for this line
    let totalSyllables = 0;

    // Iterate over each word and fetch its syllable count
    for (const word of words) {
      if (!word) continue; // Skip empty words

      const syllables = await countSyllables(word);

      if (syllables >= 0) {
        totalSyllables += syllables;
      }
    }

    // Update the syllable counts state with the total syllables
    const newSyllableCounts = [...syllableCounts];
    newSyllableCounts[index] = { line, syllables: totalSyllables };
    setSyllableCounts(newSyllableCounts);
  };

  const handleGenerateLine = async (topic: string) => {
    await generateLine(topic);
  }


  return (
    <div>
      <form action="">
        <h2 className="text-center text-lg mb-10">Create a Haiku</h2>
        <div className="flex flex-col gap-y-3 mb-5 sm:mb-10">
          {inputLines.map((line, index) => (
            <div key={index} className="flex gap-3">
              <label htmlFor={`line${index + 1}`} className="w-8 text-center">
                {index + 1}
              </label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[20rem]"
                type="text"
                name={`line${index + 1}`}
                id={`line${index + 1}`}
                value={line}
                onChange={(e) => handleLineChange(e, index)}
              />
              <button 
                className="text-green-500 hover:text-green-600 focus:text-green-600"
                type="button" 
                onClick={() => handleCountSyllables(index)}
              >
                <span className="">Count syllables</span>
                <AiFillCheckCircle/>
              </button>
            </div>
          ))}
        </div>
      </form>

      {/* Display syllable counts */}
      <div>
        <h2>Syllable Counts</h2>
        <ul>
          {syllableCounts.map((item, index) => (
            <li key={index}>
              <strong>{item.line}:</strong> {item.syllables} syllables
            </li>
          ))}
        </ul>
        <button onClick={async () => await handleGenerateLine('sunrise')}>generate line 1</button>
      </div>
    </div>
  );
}
