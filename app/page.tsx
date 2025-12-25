import Link from 'next/link';
import { dekhoSob } from './actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // "sob" = all
  const sob = await dekhoSob();

  // Weird sorting: Dead/Rotten first (Inverted logic as per prompt)
  sob.sort((a: any, b: any) => b.pachon - a.pachon);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-6xl font-bold glitch-text mb-12 text-center">
        ENTROPY_NOTES
      </h1>
      
      <Link 
        href="/new" 
        className="mb-12 border border-decay-1 text-decay-1 px-8 py-4 hover:bg-decay-1 hover:text-black transition-all"
      >
        + NOTUN_CHINTA
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {sob.map((note: any) => (
          <div 
             key={note.id} 
             className={`
               p-6 border relative overflow-hidden group
               ${note.isDead ? 'border-gray-800 opacity-30' : 'border-decay-2'}
             `}
          >
             <div className="absolute top-0 right-0 p-2 text-xs font-mono text-dust">
               PACHON: {Math.floor(note.pachon)}%
             </div>

             <h2 className="text-xl font-bold mb-4 text-decay-3 break-words">
               {note.display.slice(0, 20)}...
             </h2>
             
             <p className="font-mono text-sm text-gray-400 mb-4 line-clamp-3">
               {note.display}
             </p>

             {/* "Dekho" - Look */}
             <Link 
                href={`/note/${note.id}`}
                className="text-white underline hover:text-decay-1"
             >
                DEKHO_&gt;
             </Link>
          </div>
        ))}
      </div>
      
      {sob.length === 0 && (
         <div className="text-dust mt-12 animate-pulse">
            &gt; SUNNOTA (VOID detected)...
         </div>
      )}
    </main>
  );
}
