import { useState, useCallback, useEffect } from 'react';

const stripMarkdown = (markdown: string): string => {
    if (!markdown) return '';
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
    const [spokenText, setSpokenText] = useState<string | null>(null);
    const [speakingState, setSpeakingState] = useState<'idle' | 'speaking' | 'paused'>('idle');

    const speak = useCallback((text: string) => {
        if (!('speechSynthesis' in window) || !text) {
            return;
        }

        // If another text is being spoken, or it's paused, stop it first.
        if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
            window.speechSynthesis.cancel();
        }

        const cleanText = stripMarkdown(text);
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';

        utterance.onend = () => {
            setSpeakingState('idle');
            setSpokenText(null);
        };

        utterance.onerror = (e) => {
            console.error('Speech synthesis error:', e);
            setSpeakingState('idle');
            setSpokenText(null);
        };
        
        window.speechSynthesis.speak(utterance);
        setSpeakingState('speaking');
        setSpokenText(text);
    }, []);

    const pause = useCallback(() => {
        if (speakingState === 'speaking' && window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
            setSpeakingState('paused');
        }
    }, [speakingState]);

    const resume = useCallback(() => {
        if (speakingState === 'paused' && window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setSpeakingState('speaking');
        }
    }, [speakingState]);

    const stop = useCallback(() => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setSpeakingState('idle');
            setSpokenText(null);
        }
    }, []);

    useEffect(() => {
        // Cleanup on component unmount
        return () => stop();
    }, [stop]);

    return { spokenText, speakingState, speak, pause, resume, stop };
};
