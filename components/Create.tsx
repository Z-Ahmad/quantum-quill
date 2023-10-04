'use client'
import React, { useState } from "react";
import { countSyllables } from "@/lib/api"; 

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

  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-y-3 mb-5 sm:mb-10">
          {inputLines.map((line, index) => (
            <div key={index} className="flex gap-3">
              <label htmlFor={`line${index + 1}`}>{index + 1}</label>
              <input type="text" name={`line${index + 1}`} id={`line${index + 1}`} value={line} onChange={(e) => handleLineChange(e, index)} />
              <button type="button" onClick={() => handleCountSyllables(index)}>
                Count Syllables
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
      </div>
    </div>
  );
}
