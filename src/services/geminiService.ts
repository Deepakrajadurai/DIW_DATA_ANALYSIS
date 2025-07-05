import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import type { ReportData, ChatMessage, StoryboardData } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Please set the process.env.API_KEY environment variable. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const parseGeminiJsonResponse = <T,>(responseText: string): T | null => {
    try {
        let jsonStr = responseText.trim();
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonStr.match(fenceRegex);
        if (match && match[2]) {
            jsonStr = match[2].trim();
        }
        // Clean up potential trailing commas which can cause JSON parsing errors.
        jsonStr = jsonStr.replace(/,\s*([\]}])/g, '$1');
        return JSON.parse(jsonStr) as T;
    } catch (e) {
        console.error("Failed to parse JSON response:", e, "Raw response:", responseText);
        return null;
    }
};

export const generateNarrative = async (data: ReportData): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve("AI features are disabled. Please configure the Gemini API key.");
    }

    const prompt = `
You are a world-class economic data analyst from the German Institute for Economic Research (DIW Berlin).
Based on the following data from a DIW Weekly Report on "${data.title}", write a compelling narrative summary.

Your analysis should:
1.  Start with a concise, high-level summary of the main issue.
2.  Explain the key trends shown in the provided data and charts.
3.  **Crucially, identify and elaborate on the interconnections.** Discuss how the findings in this report might influence or be influenced by other economic sectors or social issues in Germany. For example, how might a construction downturn affect employment? How does the gender care gap relate to women in executive roles?
4.  Conclude with a forward-looking statement or a key takeaway.
5.  Format your entire response in GitHub-flavored Markdown for web display. Use headings, bold text, and bullet points to structure your analysis for readability.

Here is the data for your analysis:
- **Report Title:** ${data.title}
- **High-Level Summary:** ${data.summary}
- **Key Findings:**
${data.keyFindings.map(f => `  - ${f}`).join('\n')}
- **Chart Data:** ${JSON.stringify(data.charts, null, 2)}
- **Original Report Excerpt (for context):** 
---
${data.fullText.substring(0, 4000)}...
---
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-04-17',
        contents: prompt
    });
    return response.text;
  } catch (error) {
    console.error("Error generating narrative with Gemini:", error);
    return "An error occurred while generating the analysis. Please check the console for details.";
  }
};


export const startChat = (topicData: ReportData): Chat => {
    return ai.chats.create({
        model: 'gemini-2.5-flash-preview-04-17',
        config: {
            systemInstruction: `You are an expert AI assistant from DIW Berlin, specializing in German economic data. Your knowledge base for this conversation is the DIW Weekly Report on "${topicData.title}". The user has access to this report's summary, key findings, and charts.

            Your tasks are:
            1. Answer the user's questions concisely about the provided report.
            2. If asked, summarize the key findings or explain the charts.
            3. When relevant, briefly mention potential interconnections with other economic areas as a world-class analyst would.
            4. Keep your answers focused on the provided report context. Do not invent data. If you don't know, say so.
            
            Report context:
            - **Title:** ${topicData.title}
            - **Summary:** ${topicData.summary}
            - **Key Findings:** ${topicData.keyFindings.join(', ')}
            - **Full Text available to you:** ${topicData.fullText.substring(0, 6000)}...
            `
        }
    });
}

export const sendMessageToChat = async (chat: Chat, message: string): Promise<string> => {
    if(!API_KEY) {
        return Promise.resolve("AI features are disabled. Please configure the Gemini API key.");
    }
    try {
        const response: GenerateContentResponse = await chat.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error sending message to Gemini chat:", error);
        return "Sorry, I encountered an error. Please try again.";
    }
}

export const generateStoryboard = async (data: ReportData[]): Promise<StoryboardData | null> => {
  if (!API_KEY) {
    console.error("AI features are disabled. Please configure the Gemini API key.");
    return null;
  }

  const prompt = `
You are a world-class macroeconomic strategist. Your mission is to analyze a collection of disparate economic reports and uncover the **"narrative singularity"**—the single, powerful, underlying story that connects them all. You must distill complexity into a clear, compelling, and unified thesis, visualize it, and reflect on your own analytical process.

Your response MUST be a single JSON object that conforms to this TypeScript interface:
interface ChartDataPoint { name: string; [key: string]: string | number; }
interface ChartConfig { type: 'bar' | 'line' | 'pie'; data: ChartDataPoint[]; dataKeys: { key: string; color: string; stackId?: string; name?: string }[]; title: string; description: string; xAxisKey: string; }
interface GraphNode { id: string; title: string; }
interface GraphEdge { source: string; target: string; label: string; }
interface RelationshipGraphData { nodes: GraphNode[]; edges: GraphEdge[]; }
interface StoryboardData {
  narrative: string;
  charts: ChartConfig[];
  introspection: string;
  retrospection: string;
  relationshipGraph: RelationshipGraphData;
}

---
**DETAILED INSTRUCTIONS**
---

**1. For the \`narrative\` - The Singularity Thesis:**
*   **Identify and State the Singularity:** Begin by explicitly stating the central theme or "singularity." This is your core thesis. Frame it as a powerful, insightful statement (e.g., "Germany's current economic friction stems not from isolated issues, but from a pervasive 'crisis of structural adaptation'").
*   **Build the Case:** Demonstrate how each individual report serves as a pillar supporting your central thesis.
*   **Synthesize the Implications:** Explain the compounded effect. What is the larger, emergent threat or opportunity?
*   **Conclude with a Call to Action:** End with a concise, forward-looking statement focused on addressing the root cause.

**2. For the \`charts\` - Visualizing the Singularity:**
*   **Create a Thesis Visualization:** Your charts (1-2) **must** visually represent the narrative singularity. **Do not simply copy or re-aggregate data from the source charts.**
*   **Be Creative:** Invent a new, meaningful visualization. For example, a "Structural Drag Index" chart quantifying each report's contribution to the problem.
*   If you cannot create a meaningful visualization, return an empty array \`[]\`.

**3. For the \`relationshipGraph\` - Mapping the Connections:**
*   **Goal:** Create a node-edge graph that visually maps the most critical inter-report relationships supporting your singularity thesis. This provides a visual 'mind map' of your core argument.
*   **Nodes:** Populate the \`nodes\` array. Each node represents one of the source reports. Use the report's \`id\` and \`title\`.
*   **Edges:** Populate the \`edges\` array with 2-4 of the most critical connections. An edge connects two reports (source -> target). The \`label\` on the edge MUST be a concise explanation of the causal link (e.g., 'Reduced construction activity lowers tax revenue, worsening debt outlook').

**4. For the \`introspection\` - The 'Why':**
*   **Explain Your Reasoning:** In Markdown, reveal the logical path that led to your thesis.
*   **Pivotal Evidence**: Pinpoint the specific data points from each report that were most influential.
*   **Connecting the Dots**: Detail the non-obvious connections you discovered, which should align with your \`relationshipGraph\`.

**5. For the \`retrospection\` - The 'What If':**
*   **Critique Your Own Analysis:** In Markdown, show intellectual humility.
*   **Alternative Theses**: Briefly mention one plausible alternative 'singularity' you considered and why you discarded it.
*   **Information Gaps**: If you could request one new piece of data to strengthen your analysis, what would it be?

---
**SOURCE DATA**
---
Here is the full data from the reports for your analysis:
${JSON.stringify(data, null, 2)}
---

Your entire response must be ONLY the JSON object, without any surrounding text or markdown fences.
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-04-17',
      contents: prompt,
      config: {
          responseMimeType: "application/json",
      },
    });

    const parsedData = parseGeminiJsonResponse<StoryboardData>(response.text);

    if (parsedData && parsedData.narrative && Array.isArray(parsedData.charts) && parsedData.introspection && parsedData.retrospection && parsedData.relationshipGraph) {
        return parsedData;
    }

    throw new Error("Parsed JSON does not match StoryboardData structure or failed to parse.");

  } catch (error) {
    console.error("Error generating storyboard with Gemini:", error);
    return null;
  }
};

export const createReportFromText = async (fullText: string): Promise<ReportData | null> => {
    if (!API_KEY) {
        console.error("AI features are disabled. Please configure the Gemini API key.");
        return null;
    }

    const prompt = `
You are an expert data analyst AI. Your task is to read the following text from an economic report and convert it into a structured JSON object.

**Your output MUST be a JSON object that strictly follows this TypeScript interface. DO NOT include the 'fullText' field in your JSON output.**

interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}
interface ChartConfig {
    type: 'bar' | 'line' | 'pie';
    data: ChartDataPoint[];
    dataKeys: { key: string; color: string; stackId?: string; name?: string }[];
    title: string;
    description: string;
    xAxisKey: string;
}
// This is the JSON structure you must generate:
interface ReportDataForJson {
  id: string; // A URL-friendly slug, e.g., "new-report-title"
  title: string; // A concise title for the report.
  releaseDate: string; // The release date in YYYY-MM-DD format. Extract this from the text.
  summary: string; // A 2-3 sentence summary.
  keyFindings: string[]; // An array of 3-5 key bullet points.
  charts: ChartConfig[]; // An array of 1-2 chart configurations based on data in the text. If no quantifiable data is available, return an empty array [].
}

**Instructions:**
1.  Read the entire provided text carefully.
2.  Generate a \`title\` that accurately reflects the report's main subject.
3.  From the title, create a URL-friendly \`id\` (e.g., "Women in Leadership" becomes "women-in-leadership").
4.  Extract the \`releaseDate\` from the text. Look for dates like "February 14, 2024" and format it as YYYY-MM-DD.
5.  Write a concise \`summary\`.
6.  Extract the most important points as an array of strings for \`keyFindings\`.
7.  **Crucially for \`charts\`:**
    *   Scan the text for quantifiable data, percentages, dates, or comparisons that can be visualized.
    *   Choose the best chart \`type\` ('bar', 'line', 'pie').
    *   Construct the \`data\` array for the chart. The \`xAxisKey\` should be the label for the x-axis (e.g., 'name', 'year').
    *   Define \`dataKeys\` with appropriate keys and hex color codes.
    *   If you cannot find any suitable data to create a meaningful chart, return an empty array \`[]\` for the \`charts\` field. Do not invent data.
8.  The provided text has been automatically extracted from a PDF and may contain formatting artifacts (unusual line breaks, headers/footers). Ignore these and focus on the core content.
9.  Your entire response MUST be ONLY the JSON object. **Do not include the original text in your response.** Do not add any surrounding text, explanations, or markdown fences.

Here is the report text:
---
${fullText}
---
`;
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-04-17",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            },
        });

        const parsedData = parseGeminiJsonResponse<Omit<ReportData, 'fullText'>>(response.text);

        // Basic validation
        if (parsedData && parsedData.id && parsedData.title && parsedData.summary && Array.isArray(parsedData.keyFindings) && Array.isArray(parsedData.charts)) {
            return { ...parsedData, fullText };
        }
        throw new Error("Parsed JSON does not match ReportData structure or failed to parse.");

    } catch (error) {
        console.error("Error creating report from text with Gemini:", error);
        return null;
    }
};