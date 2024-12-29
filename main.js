// main.js
export function onMount() {
    console.log("Accessibility Reader Plugin Mounted");

    // Check for TTS support
    if (!('speechSynthesis' in window)) {
        console.error("Text-to-Speech not supported in this environment.");
        return;
    }

    // Observer to track focus changes
    const observer = new MutationObserver(() => {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.textContent) {
            speak(focusedElement.textContent);
        }
    });

    // Start observing the body for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // Store observer for cleanup
    window.accessibilityReaderObserver = observer;
}

// Clean up when the plugin is unmounted
export function onUnmount() {
    console.log("Accessibility Reader Plugin Unmounted");

    if (window.accessibilityReaderObserver) {
        window.accessibilityReaderObserver.disconnect();
        delete window.accessibilityReaderObserver;
    }
}

// Text-to-Speech function
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0; // Normal speaking rate
    window.speechSynthesis.speak(utterance);
}
