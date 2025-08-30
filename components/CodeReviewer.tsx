import React, { useState } from 'react';
import { reviewCodeWithGemini } from '../services/geminiService';

interface CodeReviewerProps {
  language: string;
}

const CodeReviewer: React.FC<CodeReviewerProps> = ({ language }) => {
  const [code, setCode] = useState('');
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleReview = async () => {
    if (!code.trim()) {
      setError('Bitte geben Sie Code für die Überprüfung ein.');
      return;
    }
    setIsLoading(true);
    setError('');
    setReview('');
    try {
      const result = await reviewCodeWithGemini(code, language);
      setReview(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatReview = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('**') && line.endsWith('**')) {
          return <h4 key={index} className="text-lg font-semibold text-purple-300 mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
        }
        if (line.startsWith('* ')) {
          return <li key={index} className="ml-5 list-disc">{line.substring(2)}</li>;
        }
        return <p key={index} className="mb-2">{line}</p>;
      });
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mt-6">
      <h3 className="text-xl font-bold text-white mb-4">Gemini Code Review Assistant</h3>
      <p className="text-gray-400 mb-4">Reichen Sie Code über die Web-Oberfläche ein. Der Orchestrator bewertet den Code und gibt Feedback.</p>
      <textarea
        className="w-full h-48 bg-gray-900 border border-gray-600 rounded-md p-3 font-mono text-sm text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={`Fügen Sie hier Ihren ${language}-Code ein...`}
      />
      <button
        onClick={handleReview}
        disabled={isLoading}
        className="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? 'Überprüft...' : 'Code überprüfen'}
      </button>
      {error && <p className="mt-4 text-red-400">{error}</p>}
      {review && (
        <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-2">Review Ergebnis:</h4>
          <div className="prose prose-invert text-gray-300 max-w-none">{formatReview(review)}</div>
        </div>
      )}
    </div>
  );
};

export default CodeReviewer;