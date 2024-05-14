import { ServiceType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
export const ServiceCard = ({ title, image, slug }: ServiceType) => {
  return (
    <Link
      href={`/services/${slug}`}
      className="rounded-md bg-white hover:bg-slate-100 dark:bg-slate-800 duration-300 flex gap-4 overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        width={1170}
        height={848}
        className="w-1/3 object-cover"
      />
      <div className="flex flex-col w-2/3 py-4">
        <h2>{title}</h2>
        <p className="text-[0.6rem]">936 Doctors Available</p>
      </div>
    </Link>
  );
};
