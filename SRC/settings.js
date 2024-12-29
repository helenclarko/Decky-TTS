import { PanelSection, PanelSectionRow, SliderField, ToggleField } from "decky-frontend-lib";

export const SettingsPage = ({ settings, updateSettings }) => {
    return (
        <PanelSection title="Accessibility Reader Settings">
            <PanelSectionRow>
                <ToggleField
                    label="Enable TTS"
                    checked={settings.enableTTS}
                    onChange={(value) => updateSettings({ enableTTS: value })}
                />
            </PanelSectionRow>
            <PanelSectionRow>
                <SliderField
                    label="TTS Speed"
                    value={settings.ttsSpeed}
                    min={0.5}
                    max={2.0}
                    step={0.1}
                    onChange={(value) => updateSettings({ ttsSpeed: value })}
                />
            </PanelSectionRow>
        </PanelSection>
    );
};
