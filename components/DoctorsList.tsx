import { SectionHeading } from './SectionHeading';
import { ToggleButton } from './ToggleButton';
import Link from 'next/link';
import { DoctorCard } from './DoctorCard';
import { Map } from 'lucide-react';
import DoctorsListCarousel from './DoctorsListCarousel';

export const DoctorsList = ({
  title = 'Telehealth visit',
  isInPerson = false,
}: {
  title?: string;
  isInPerson?: boolean;
  }) => {
  const doctors = [
    {
      name: "John"
    },
    {
      name: "John"
    },
    {
      name: "John"
    },
    {
      name: "John"
    }
  ]
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeading title={title} />
      <div className="py-4 flex items-center justify-between">
        {isInPerson ? (
          <Link
            href=""
            className="text-sm flex items-center text-blue-700 font-semibold"
          >
            <Map className="mr-2 flex-shrink-0 h-4 w-4" />
            <span>Map View</span>
          </Link>
        ) : (
          <ToggleButton />
        )}
        <Link href="" className="py-3 px-6 border border-blue-600 bg-white">
          See All
        </Link>
      </div>
      <div className="py-6">
        <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson} />
      </div>
    </div>
  );
};
