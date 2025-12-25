import React from 'react';
import { notunBhoot } from '../actions';
import WeirdInput from '@/components/WeirdInput';
import Link from 'next/link';

export default function NotunPage() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-decay-1 glitch-text">
        NOTUN_CHINTA (New Thought)
      </h1>
      
      <form action={notunBhoot} className="w-full max-w-2xl flex flex-col gap-4">
        {/* "Kotha" - Word/Talk */}
        <WeirdInput name="kotha" />
        
        <button 
           type="submit" 
           className="bg-decay-2 text-black p-4 font-bold hover:bg-white transition-colors"
        >
           JIBITO_KORO (BRING TO LIFE)
        </button>
      </form>

      <Link href="/" className="mt-8 text-dust hover:text-white">
        &lt; PROSTHAN (EXIT)
      </Link>
    </main>
  );
}
