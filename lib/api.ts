import axios from "axios";

// Define the base URL for API
const baseURL = "http://zakiahmad.pythonanywhere.com";

// Define types for API responses
interface SyllableResponse {
  syllables: number;
}

// Create a function to check syllables for a single word
export async function countSyllables(word: string): Promise<number> {
  try {
    const response = await axios.post<SyllableResponse>(
      `${baseURL}/syllable`,
      { word },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.syllables;
  } catch (error) {
    console.error("Error checking syllables:", error);
    return -1; // Handle errors gracefully, return -1 or another appropriate value
  }
}
