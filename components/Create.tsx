'use client'
import React, { useState } from "react";
import { countSyllables} from "@/lib/api"; 
import { generateLine } from "@/lib/api";
import SyllableCheckButton from "./SyllableCheckButton";
import LineGenerationButton from "./LineGenerationButton";

export default function Create() {
  const [inputLines, setInputLines] = useState<string[]>(["", "", ""]); // tracks values in each line
  const [inputBorders, setInputBorders] = useState<string[]>(["", "", ""]); // tracks border colors for lines green or red
  const handleLineChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputLines = [...inputLines];
    newInputLines[index] = e.target.value;
    setInputLines(newInputLines);
  };

  const checkSyllableCount = async () => {
    let counts = [];
    const format = [5, 7, 5];
    const newInputBorders = [...inputBorders];
    for (let line of inputLines) {
      counts.push(await countSyllables(line));
    }
    // Update inputBorders based on syllable counts
    for (let i in counts) {
      if (counts[i] === format[i]) {
        newInputBorders[i] = "border-green-500";
      } else {
        newInputBorders[i] = "border-red-500";
      }
    }

    //set the updated inputBorders state
    setInputBorders(newInputBorders);
  };


  const handleGenerateLine = async (topic: string) => {
    const content = await generateLine(topic);
    //set line1 = content
    setInputLines([(content || '') as string, inputLines[1], inputLines[2]]);
    console.log(content);
    await checkSyllableCount();
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
                className={`border rounded-md px-3 py-2 w-full sm:w-[20rem] ${inputBorders[index]}`}
                type="text"
                name={`line${index + 1}`}
                id={`line${index + 1}`}
                value={line}
                onChange={(e) => handleLineChange(e, index)}
              />
            </div>
          ))}
        </div>
      </form>
      
      <div className="flex gap-2 flex-col sm:flex-row">
        <form action={async ()=>{
          await checkSyllableCount()
          }}
        >
          <SyllableCheckButton/>
        </form>
        
        <form action={async()=>{
          await handleGenerateLine("nature")
        }}>
          <LineGenerationButton/>
        </form>
      </div>

    </div>
  );
}
