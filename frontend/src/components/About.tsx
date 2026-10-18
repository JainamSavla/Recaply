import React, { useState, useEffect } from "react";
import { getVersion } from '@tauri-apps/api/app';

export function About() {
    const [currentVersion, setCurrentVersion] = useState<string>('0.4.1');

    useEffect(() => {
        // Get current version on mount
        getVersion().then(setCurrentVersion).catch(console.error);
    }, []);

    return (
        <div className="p-4 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-xl font-bold text-gray-900">Recaply</h1>
                <span className="text-sm text-gray-500"> v{currentVersion}</span>
                <p className="text-medium text-gray-600 mt-1">
                    Real-time notes and summaries that never leave your machine.
                </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-3">
                <h2 className="text-base font-semibold text-gray-800">What makes Recaply different</h2>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 rounded p-3 hover:bg-gray-100 transition-colors">
                        <h3 className="font-bold text-sm text-gray-900 mb-1">Privacy-first</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Your data & AI processing workflow can now stay within your premise. No cloud, no leaks.</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3 hover:bg-gray-100 transition-colors">
                        <h3 className="font-bold text-sm text-gray-900 mb-1">Use Any Model</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Prefer local open-source model? Great. Want to plug in an external API? Also fine. No lock-in.</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3 hover:bg-gray-100 transition-colors">
                        <h3 className="font-bold text-sm text-gray-900 mb-1">Cost-Smart</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Avoid pay-per-minute bills by running models locally (or pay only for the calls you choose).</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3 hover:bg-gray-100 transition-colors">
                        <h3 className="font-bold text-sm text-gray-900 mb-1">Works everywhere</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Google Meet, Zoom, Teams-online or offline.</p>
                    </div>
                </div>
            </div>

            {/* How it works */}
            <div className="space-y-2">
                <h2 className="text-base font-semibold text-gray-800">How it works</h2>
                <ol className="space-y-2 text-xs text-gray-600">
                    <li className="flex gap-2">
                        <span className="font-bold text-gray-900">1.</span>
                        <span>Hit Start Recording. Recaply captures your microphone and system audio.</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="font-bold text-gray-900">2.</span>
                        <span>Speech is transcribed live on your device.</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="font-bold text-gray-900">3.</span>
                        <span>Stop recording and get an AI summary you can edit and keep.</span>
                    </li>
                </ol>
            </div>

            {/* Under the hood */}
            <div className="space-y-2">
                <h2 className="text-base font-semibold text-gray-800">Under the hood</h2>
                <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                    <li>Local transcription with Parakeet or Whisper</li>
                    <li>Summaries via a built-in model, Ollama, Claude, Groq or OpenRouter</li>
                    <li>Recordings and notes stored on your machine</li>
                </ul>
            </div>
        </div>
    );
}