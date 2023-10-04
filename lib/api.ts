import axios from "axios";
import OpenAi from 'openai'

const myAPIKey = process.env.OPENAI_API_KEY;
const baseURL = "https://zakiahmad.pythonanywhere.com";
const openai = new OpenAi({
  apiKey: myAPIKey,
  dangerouslyAllowBrowser: true
});

// Define types for API responses
interface SyllableResponse {
  syllables: number;
}

// Create a function to check syllables for a single word
export async function countSyllables(line: string): Promise<number> {
  try {
    let count = 0;
    const words = line.split(" ");
    // console.log("words", words)
    for(let word of words){
      const response = await axios.post<SyllableResponse>(
        `${baseURL}/syllable`,
        { word },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      count += response.data.syllables;
    }
    return count;
    
  } catch (error) {
    console.error("Error checking syllables:", error);
    return -1; // Handle errors gracefully, return -1 or another appropriate value
  }
}

export async function generateLine(topic: string){
  const chatCompletion = await openai.chat.completions.create({
    messages: [{role: 'user', content: 'Generate 1st line (5 syllable) of a haiku about ' + topic}], 
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices[0].message.content)
}