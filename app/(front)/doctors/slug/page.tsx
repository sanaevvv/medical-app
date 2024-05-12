import { DoctorDetails } from '@/components/DoctorDetails';
import { FixedBookButton } from '@/components/FixedBookButton';
import Image from 'next/image';

const DoctorsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-md rounded-md">
        <div className="py-8 px-6">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex flex-col">
                <h2 className="uppercase font-bold text-2xl tracking-widest">
                  Vijal Patel, PA-C
                </h2>
                <p className="text-gray-500 text-sm uppercase">Adult Health</p>
              </div>
              <div className="py-3">
                <p>In-person doctor visit</p>
                <p>3250 Lincoln Highway, Kendall Park, NJ 08824</p>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={243}
              height={207}
              alt="Doctor"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="">
          <DoctorDetails />
        </div>
      </div>
      <FixedBookButton />
    </div>
  );
};

export default DoctorsPage;
