'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { countSyllables} from "@/lib/api"; 
import { generateLine } from "@/lib/api";
import SyllableCheckButton from "./SyllableCheckButton";
import LineGenerationButton from "./LineGenerationButton";

export default function Create() {
  const [inputLines, setInputLines] = useState<string[]>(["", "", ""]); // tracks values in each line
  const [inputBorders, setInputBorders] = useState<string[]>(["", "", ""]); // tracks border colors for lines green or red
  const [topic, setTopic] = useState<string>("nature"); // tracks topic for line generation

  const handleLineChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputLines = [...inputLines];
    newInputLines[index] = e.target.value;
    setInputLines(newInputLines);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  }

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
    const newInputBorders = [...inputBorders];
    newInputBorders[0] = "border-green-500";
    setInputBorders(newInputBorders);
  }


  return (
    <motion.div className="flex flex-col justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.325 }}>
      <form action="" className="flex flex-col justify-center items-center">
        <h2 className="text-center text-lg font-semibold">Create a Haiku</h2>
        <p className="text-center tex-md mb-10">(5-7-5)</p>
        <div className="flex flex-col justify-center items-center gap-y-3 mb-5 sm:mb-10">
          {inputLines.map((line, index) => (
            <div key={index} className="flex items-center gap-3">
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

      <div className="flex gap-2 flex-col justify-center items-center">
        <form
          action={async () => {
            await checkSyllableCount();
          }}
        >
          <SyllableCheckButton />
        </form>

        <form
          action={async () => {
            await handleGenerateLine(topic);
          }}
        >
          <h3 className="text-center text-md mt-8 mb-3 font-semibold">Get a Creative Boost from GPT to Begin Your Haiku</h3>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div>
              <label className="text-center" htmlFor="topic">
                Topic:{" "}
              </label>
              <input
                className="border rounded-md px-3 py-2"
                type="text"
                name="topic"
                id="topic"
                onChange={(e) => handleTopicChange(e)}
                value={topic}
                autoComplete="off"
              />
            </div>
            <LineGenerationButton />
          </div>
        </form>
      </div>
    </motion.div>
  );
}
