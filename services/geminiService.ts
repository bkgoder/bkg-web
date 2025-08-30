
import { GoogleGenAI } from "@google/genai";

// Assume API_KEY is set in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const reviewCodeWithGemini = async (code: string, language: string): Promise<string> => {
  if (!API_KEY) {
    return Promise.resolve("Fehler: API-Schlüssel ist nicht konfiguriert. Bitte richten Sie die Umgebungsvariable API_KEY ein.");
  }

  try {
    const prompt = `
      You are an expert code reviewer specializing in security, performance, and best practices for the ${language} programming language.
      Review the following code snippet. Provide a concise, professional code review in German.
      Structure your feedback into three sections:
      1.  **Sicherheit (Security):** Point out any potential security vulnerabilities.
      2.  **Performance:** Suggest any possible performance optimizations.
      3.  **Best Practices & Stil:** Comment on code style, readability, and adherence to language conventions.

      If there are no issues in a section, state that. Be constructive and provide clear examples for your suggestions where possible.

      \`\`\`${language}
      ${code}
      \`\`\`
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return `Fehler bei der Überprüfung des Codes: ${error.message}`;
    }
    return "Ein unbekannter Fehler ist bei der Code-Überprüfung aufgetreten.";
  }
};
