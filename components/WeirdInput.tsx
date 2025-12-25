'use client';

import React, { useState } from 'react';

export default function WeirdInput({ name }: { name: string }) {
  const [val, setVal] = useState('');

  // "bhulKoraPap" - Making mistake is sin
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      // Add punishment characters
      setVal((prev) => prev + '~~~~');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
  };

  return (
    <textarea
      name={name}
      value={val}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      className="w-full h-32 bg-black border border-decay-1 text-decay-1 p-4 font-mono focus:outline-none focus:border-decay-2"
      placeholder="Type here... (NO BACKSPACE ALLOWED)"
    />
  );
}
