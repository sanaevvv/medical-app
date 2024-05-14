import { DoctorsList } from '@/components/DoctorsList';
import Brands from '@/components/Frontend/Brands';
import Hero from '@/components/Frontend/Hero';
import TabbedSection from '@/components/Frontend/TabbedSection';

export default function Home() {
  return (
    <>
      <section className="bg-blue-950 dark:bg-slate-950">
        <Hero />
      </section>
      <section className="py-10 lg:py-[90px] bg-slate-100 text-slate-800">
        <Brands />
      </section>
      <section className="pb-12 pt-20 dark:bg-slate-950 lg:py-[90px]">
        <TabbedSection />
      </section>
      <section className="py-8 lg:py-24 bg-pink-100 dark:bg-teal-900">
        <DoctorsList />
      </section>
      <section className="py-8 lg:py-24 bg-blue-50 dark:bg-slate-900">
        <DoctorsList title="In-person doctor visit" isInPerson />
      </section>
    </>
  );
}
