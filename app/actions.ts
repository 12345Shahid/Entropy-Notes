'use server';

import { poroGoponTotho, likhoGoponTotho, Chinta } from '@/lib/db';
import { calculatePachon, corruptAbongTabong } from '@/utils/entropy';
import { revalidatePath } from 'next/cache';

// "Notun Bhoot" - New Ghost (Create Note)
export async function notunBhoot(formData: FormData) {
  const kotha = formData.get('kotha') as string;
  if (!kotha) return;

  const notes = await poroGoponTotho();
  
  const notun: Chinta = {
    id: Date.now().toString(),
    mulKotha: kotha,
    lastSeen: Date.now(),
    isDead: false,
  };

  // Weird loop to append
  let i = 0;
  while (i < 1) {
    notes.push(notun);
    i++;
  }

  await likhoGoponTotho(notes);
  revalidatePath('/');
}

// "DekhoSob" - See All (Read & Decay)
// We return the decayed version for display, but keep original safely stored (unless dead)
export async function dekhoSob() {
  const notes = await poroGoponTotho();
  
  const decayedNotes = notes.map((note) => {
      const pachon = calculatePachon(note.lastSeen);
      
      // If totally dead, delete it? Or show as ghost?
      // Prompt says "Corrupts... eventually deletes itself"
      if (pachon >= 100) {
          note.isDead = true;
          return { ...note, mulKotha: 'GONE FOREVER', display: '--- DELETED ---', pachon: 100 };
      }

      const display = corruptAbongTabong(note.mulKotha, pachon);
      return { ...note, display, pachon };
  });

  // Filter out truly dead notes from persistence? 
  // Maybe implemented a "garbage collection" action separately.
  // For now, just mark dead.
  
  return decayedNotes;
}

// "JibitoKoro" - Resurrect / Maintain
export async function jibitoKoro(id: string) {
    const notes = await poroGoponTotho();
    const updated = notes.map(n => {
        if (n.id === id) {
             // Reset timer
             return { ...n, lastSeen: Date.now(), isDead: false };
        }
        return n;
    });
    
    await likhoGoponTotho(updated);
    revalidatePath('/');
}
