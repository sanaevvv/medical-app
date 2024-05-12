'use client';

import React, { useState } from 'react';
import { Calendar } from './ui/calendar';
import Link from 'next/link';

const timeStamps = [
  {
    time: '8:30',
    period: 'am',
  },
  {
    time: '8:30',
    period: 'am',
  },
  {
    time: '9:30',
    period: 'am',
  },
  {
    time: '10:30',
    period: 'am',
  },
  {
    time: '11:30',
    period: 'am',
  },
  {
    time: '12:30',
    period: 'pm',
  },
  {
    time: '1:30',
    period: 'pm',
  },
  {
    time: '2:30',
    period: 'pm',
  },
];

export const Availability = () => {
  const [bookDate, setBookDate] = useState<Date | undefined>(new Date());

  const GMT = bookDate?.toString().split('GMT')[1].split(' ')[0];
  const formattedDate = `${bookDate
    ?.toString()
    .split(' ')
    .slice(0, 3)
    .join(' ')} - GMT${GMT}`;

  console.log(bookDate);

  return (
    <div className="mb-[200px]">
      <h2 className="font-bold py-4 pb-6 text-xl uppercase text-slate-500 tracking-wider text-center">
        Select a Date and Time
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border flex justify-center"
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
            <h2 className="text-blue-700 text-center py-3 px-4 border border-blue-500">
              {formattedDate}
            </h2>
            <div className="py-3 grid grid-cols-3 gap-x-4 gap-y-2 text-center">
              {timeStamps.slice(0, 5).map((timestamp) => (
                <button
                  className="bg-blue-600 text-sm text-white py-2 px-3"
                  key={timestamp.time}
                >
                  {timestamp.time}
                  {timestamp.period}
                </button>
              ))}
              <button className="bg-blue-900 border text-sm border-blue-900 text-white py-2 px-3 text-[0.7rem]">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Calendar */}

      {/* Available time */}
    </div>
  );
};
