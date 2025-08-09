"use client";

import { Languages } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

interface LanguageToggleProps {
  currentLang: 'en' | 'pt';
  hasPtVersion: boolean;
  isUsingFallback?: boolean;
}

export function LanguageToggle({ 
  currentLang, 
  hasPtVersion, 
  isUsingFallback 
}: LanguageToggleProps) {
  const router = useRouter();
  const params = useParams();

  if (!hasPtVersion) {
    return null;
  }

  const handleToggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    const currentUrl = `/articles/${params.slug}`;
    const newUrl = newLang === 'pt' ? `${currentUrl}?lang=pt` : currentUrl;
    router.push(newUrl);
  };

  return (
    <div className="flex items-center justify-center mb-6">
      <button
        onClick={handleToggleLanguage}
        className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        <Languages className="w-4 h-4" />
        {currentLang === 'en' ? 'Ver em Português' : 'View in English'}
      </button>
      {isUsingFallback && (
        <span className="ml-3 text-xs text-gray-500">
          (Versão em português não disponível)
        </span>
      )}
    </div>
  );
}