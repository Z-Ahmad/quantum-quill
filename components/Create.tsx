'use client'
import React, { useState } from "react";
import { checkSyllables } from "@/lib/api"; 

export default function Create() {
  const [syllableCounts, setSyllableCounts] = useState<{ word: string; syllables: number }[]>([]);
  const [inputLines, setInputLines] = useState<string[]>(["", "", ""]); // Initialize with empty lines

  const handleLineChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputLines = [...inputLines];
    newInputLines[index] = e.target.value;
    setInputLines(newInputLines);
  };

  const handleCheckSyllables = async (index: number) => {
    const word = inputLines[index];
    if (!word) return; // Skip empty lines

    const syllables = await checkSyllables(word);
    const newSyllableCounts = [...syllableCounts];
    newSyllableCounts[index] = { word, syllables };
    setSyllableCounts(newSyllableCounts);
  };

  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-y-3">
          {inputLines.map((line, index) => (
            <div key={index}>
              <label htmlFor={`line${index + 1}`}>{index + 1}</label>
              <input type="text" name={`line${index + 1}`} id={`line${index + 1}`} value={line} onChange={(e) => handleLineChange(e, index)} />
              <button type="button" onClick={() => handleCheckSyllables(index)}>
                Check Syllables
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
              <strong>{item.word}:</strong> {item.syllables} syllables
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
