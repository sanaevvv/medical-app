'use client';

import { Plus } from 'lucide-react';
import { Button } from './ui/button';

export const FixedBookButton = () => {
  return (
    <div className="fixed bg-white dark:bg-slate-700 z-50 bottom-0 w-full shadow-2xl py-8 px-6 gap-4">
      <div className="max-w-4xl flex items-center mx-auto">
        <div className="w-full">
          <p className="text-xl font-bold">$56</p>
          <p className="font-semibold text-sm">Tue, Mar 12 - 8:00 AM GMT + 3</p>
        </div>
        <Button variant="outline" className="px-6 py-3">
          <Plus className="w-5 h-5 mr-1" />
          Book
        </Button>
      </div>
    </div>
  );
};
