'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Availability } from './Availability';

export const DoctorDetails = () => {
  const [isActive, setIsActive] = useState('availability');
  return (
    <div className="">
      <div className="flex items-stretch justify-between">
        <button
          onClick={() => setIsActive('details')}
          className={cn(
            'py-4 px-8 w-full uppercase tracking-widest flex-1',
            isActive === 'details'
              ? 'bg-blue-600 text-white'
              : 'border border-gray-200 bg-slate-100 text-slate-800'
          )}
        >
          Service Details
        </button>
        <button
          onClick={() => setIsActive('availability')}
          className={cn(
            'py-4 px-8 w-full uppercase tracking-widest flex-1',
            isActive === 'availability'
              ? 'bg-blue-600 text-white'
              : 'border border-gray-200 bg-slate-100 text-slate-800'
          )}
        >
          Availability
        </button>
      </div>
      <div className="py-8 px-6">
        {isActive === 'availability' ? (
          <div>
            <Availability />
          </div>
        ) : (
          <div>Service Details Component</div>
        )}
      </div>
    </div>
  );
};
