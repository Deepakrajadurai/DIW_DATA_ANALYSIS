import { useState, useCallback, useEffect } from 'react';

const stripMarkdown = (markdown: string): string => {
    return markdown
        .replace(/#{1,6}\s/g, '') // Headings
        .replace(/(\*\*|__)(.*?)\1/g, '$2') // Bold
        .replace(/(\*|_)(.*?)\1/g, '$2') // Italic
        .replace(/!\[(.*?)\]\(.*?\)/g, '$1') // Images
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links
        .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // Code
        .replace(/>\s/g, '') // Blockquotes
        .replace(/\n\s*[-*+]\s/g, '\n') // List items
        .replace(/\n{2,}/g, '\n') // Multiple newlines
        .trim();
};

export const useSpeechSynthesis = () => {
    const [currentlySpeaking, setCurrentlySpeaking] = useState<string | null>(null);

    const speak = useCallback((text: string) => {
        if (!('speechSynthesis' in window)) {
            alert('Sorry, your browser does not support text-to-speech.');
            return;
        }

        window.speechSynthesis.cancel();
        
        const cleanText = stripMarkdown(text);
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';

        utterance.onend = () => {
            setCurrentlySpeaking(null);
        };

        utterance.onerror = (e) => {
            console.error('Speech synthesis error:', e);
            setCurrentlySpeaking(null);
        };

        setCurrentlySpeaking(text);
        window.speechSynthesis.speak(utterance);
    }, []);

    const stopSpeaking = useCallback(() => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setCurrentlySpeaking(null);
        }
    }, []);

    const toggleSpeech = useCallback((text: string) => {
        if (currentlySpeaking === text) {
            stopSpeaking();
        } else {
            speak(text);
        }
    }, [currentlySpeaking, speak, stopSpeaking]);

    useEffect(() => {
        // Cleanup on component unmount
        return () => stopSpeaking();
    }, [stopSpeaking]);

    return { currentlySpeaking, toggleSpeech, stopSpeaking };
};
