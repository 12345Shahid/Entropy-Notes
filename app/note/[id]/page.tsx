import { poroGoponTotho } from '@/lib/db';
import { jibitoKoro } from '../../actions';
import { calculatePachon, corruptAbongTabong } from '@/utils/entropy';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function NotePage({ params }: { params: { id: string } }) {
  const sob = await poroGoponTotho();
  const note = sob.find((n: any) => n.id === params.id);

  if (!note) {
    notFound();
  }

  const pachon = calculatePachon(note.lastSeen);
  const display = note.isDead ? '--- GONE ---' : corruptAbongTabong(note.mulKotha, pachon);

  // "JibitoKoroAction" - Resurrect Action
  const jibitoKoroAction = async () => {
    'use server';
    await jibitoKoro(note.id);
  };

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl border border-decay-2 bg-black/50 p-8 relative">
         <div className="absolute top-0 left-0 bg-decay-2 text-black px-2 font-bold text-xs">
            ID: {note.id}
         </div>
         <div className="absolute top-0 right-0 text-dust font-mono text-xs p-2">
            PACHON_LEVEL: {pachon.toFixed(2)}%
         </div>

         <div className="mt-8 mb-8 font-mono text-2xl whitespace-pre-wrap text-decay-3 leading-relaxed">
            {display}
         </div>

         {note.isDead ? (
             <div className="text-red-500 font-bold text-center">
                 RIP (REST IN PIXELS)
             </div>
         ) : (
             <form action={jibitoKoroAction} className="flex justify-center">
                 <button 
                    className="border border-decay-1 text-decay-1 px-6 py-2 hover:bg-decay-1 hover:text-black transition-colors glitch-text"
                 >
                    POLISH_MEMORY (Reduce Entropy)
                 </button>
             </form>
         )}
      </div>

      <Link href="/" className="mt-8 text-dust hover:text-white">
        &lt; PROSTHAN
      </Link>
    </main>
  );
}
