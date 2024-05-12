'use client';

import { Plus } from 'lucide-react';
import { Button } from './ui/button';

export const FixedBookButton = () => {
  return (
    <div className="fixed bg-white z-50 bottom-0 w-full shadow-2xl py-8 px-6 border border-gray-200 gap-4">
      <div className="max-w-4xl flex items-center mx-auto">
        <div className="w-full">
          <p className="text-xl font-bold">$56</p>
          <p className="font-semibold text-sm">Tue, Mar 12 - 8:00 AM GMT + 3</p>
        </div>
        <Button
          variant="outline"
          className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold uppercase tracking-widest leading-5 text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 hover:bg-slate-800 hover:text-slate-50"
        >
          <Plus className="w-5 h-5 mr-1" />
          Book
        </Button>
      </div>
    </div>
  );
};
