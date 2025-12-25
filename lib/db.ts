import fs from 'fs';
import path from 'path';

// "GoponTotho" means Secret Data
const dbPath = path.join(process.cwd(), 'gopon_totho.json');

export type Chinta = {
  id: string;
  mulKotha: string; // Original content
  lastSeen: number; // timestamp
  isDead: boolean;
};

// "poro" - Read
export const poroGoponTotho = async (): Promise<Chinta[]> => {
  try {
    if (!fs.existsSync(dbPath)) {
        return [];
    }
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// "likho" - Write
export const likhoGoponTotho = async (tothos: Chinta[]) => {
  fs.writeFileSync(dbPath, JSON.stringify(tothos, null, 2));
};
