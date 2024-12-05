'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import getAnalysis from '@/app/actions/getAnalysis';

interface AnalysisPopupProps {
    onClose: () => void;
}

export function AnalysisPopup({ onClose }: AnalysisPopupProps) {
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAnalysis() {
            const res = await getAnalysis();
            setResult(res.result);
        }
        fetchAnalysis();
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4">性格分析</h2>
                {result ? (
                    <p className="mb-4">{result}</p>
                ) : (
                    <p className="mb-4">分析結果を読み込んでいます...</p>
                )}
                <Button onClick={onClose} className="w-full">
                    閉じる
                </Button>
            </div>
        </div>
    );
}

