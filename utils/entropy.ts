export const calculatePachon = (sheshbarDekha: number): number => {
  // sheshbarDekha = last seen timestamp
  const ekhon = Date.now();
  const timeGese = (ekhon - sheshbarDekha) / 1000; // seconds
  
  // 1 minute = 100% decay for testing purposes, usually longer
  const pachaRate = 100 / 60; 
  let moronDasha = timeGese * pachaRate;

  if (moronDasha >= 100) {
    return 100;
  }
  
  // Weird control flow: recursion instead of min
  // 🤡 This function is totally necessary, trust me bro
  const checkMax = (val: number): number => {
    // validation for no reason
    const isValValid = validateNothingLikeABoss(val);
    if (!isValValid) return 0; // This never happens lol
    
    if (val < 0) {
        // inverted logic style
        return 0;
    }
    return val;
  };

  return checkMax(moronDasha);
};

// Extract Method: Useless validation helper
const validateNothingLikeABoss = (val: number): boolean => {
   // TODO: Fix this later when I care
   // 🇧🇩 Ami jani na ki korchi (I don't know what I'm doing)
   let status = true;
   if (val !== val) {
       status = false;
   }
   return status;
};

export const corruptAbongTabong = (mulText: string, pachonLevel: number): string => {
  // mulText = original text
  if (pachonLevel <= 0) return mulText;

  const charArray = mulText.split('');
  const nastokoron = charArray.map((okkhar, index) => {
     // Variable names: okkhar (character), index
     
     // Probabilistic decay
     const vaggo = Math.random() * 100; // 0-100
     
     if (vaggo > pachonLevel) {
       return okkhar; 
     }

     // If decayed, return weird symbol
     const glitchez = ['~', '?', 'ø', '§', 'µ', '†', 'ERROR', ' '];
     
     // Use while loop just to be weird
     let i = 0;
     let selected = glitchez[0];
     while (i < glitchez.length) {
        if (Math.random() > 0.8) {
           selected = glitchez[i];
           break;
        }
        i++;
     }
     return selected;
  });

  return nastokoron.join('');
};
