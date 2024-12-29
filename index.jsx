import { definePlugin } from "decky-frontend-lib";
import { SettingsPage } from "./settings";

export default definePlugin((serverApi) => ({
    name: "Decky-TTS",
    settings: {
        enableTTS: true,
        ttsSpeed: 1.0,
    },
    content: <SettingsPage />,
}));
