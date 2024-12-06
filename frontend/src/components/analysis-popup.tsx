'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import getAnalysis from '@/app/actions/getAnalysis';

interface AnalysisPopupProps {
    onClose: () => void;
}

export function AnalysisPopup({ onClose }: AnalysisPopupProps) {
    const [result, setResult] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const fetchedRef = useRef(false);

    useEffect(() => {
        async function fetchAnalysis() {
            if (fetchedRef.current) return;
            fetchedRef.current = true;
            try {
                const res = await getAnalysis();
                console.log("Hello World");
                setResult(res.result);
            } catch (error) {
                console.error("Failed to fetch analysis:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchAnalysis();
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4">性格分析</h2>
                {isLoading ? (
                    <p className="mb-4">分析結果を読み込んでいます...</p>
                ) : result ? (
                    <p className="mb-4">{result}</p>
                ) : (
                    <p className="mb-4">分析結果の取得に失敗しました。</p>
                )}
                <Button onClick={onClose} className="w-full">
                    閉じる
                </Button>
            </div>
        </div>
    );
}

