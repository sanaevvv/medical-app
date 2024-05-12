import { Stethoscope, Video } from 'lucide-react';
import Image from 'next/image';
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

export const DoctorCard = ({
  isInPerson = false,
}: {
  isInPerson?: boolean;
}) => {
  return (
    <div className="border border-gray-200 bg-white w-[340px] py-6 px-4 rounded-md hover:border-gray-400 duration-300 transition-all hover:bg-gray-50">
      <Link href={`/doctors/slug`}>
        <h2 className="uppercase font-bold text-2xl tracking-widest">
          Vijal Patel PA-C
        </h2>
        {isInPerson && <p className="py-3 text-gray-400">location</p>}
        <div className="flex items-center justify-between py-4">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={243}
              height={207}
              alt="Doctor"
              className="w-24 h-24 rounded-full object-cover"
            />
            {!isInPerson && (
              <p className="bg-blue-200 w-10 h-10 flex justify-center items-center rounded-full text-blue-700 absolute bottom-0 right-0">
                <Video className="w-6 h-6" />
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Family Medicine</span>
            </p>
            <p className="bg-green-200 py-3 px-6 uppercase">Available today</p>
          </div>
        </div>
        <hr className="pt-6 border-gray-200" />
        <h3 className="flex gap-4 justify-between items-center">
          <span className="text-gray-600">Fri, May 3</span>
          <span className="font-bold">$137</span>
        </h3>
      </Link>
      <div className="py-3 grid grid-cols-3 gap-x-4 gap-y-2 text-center">
        {timeStamps.slice(0, 5).map((timestamp) => (
          <Link
            href=""
            className="bg-blue-600 text-sm text-white py-2 px-3"
            key={timestamp.time}
          >
            {timestamp.time}
            {timestamp.period}
          </Link>
        ))}
        <Link
          href={`/doctors/slug`}
          className="bg-blue-900 border text-sm border-blue-900 text-white py-2 px-3 text-[0.7rem]"
        >
          More
        </Link>
      </div>
    </div>
  );
};
