import { useState, useCallback, useEffect } from 'react';

export const useSpeechSynthesis = () => {
    const [currentlySpeaking, setCurrentlySpeaking] = useState<string | null>(null);

    const speak = useCallback((text: string) => {
        if (!('speechSynthesis' in window)) {
            alert('Sorry, your browser does not support text-to-speech.');
            return;
        }

        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
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