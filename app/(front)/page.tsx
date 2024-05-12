import { DoctorsList } from '@/components/DoctorsList';
import Brands from '@/components/Frontend/Brands';
import Hero from '@/components/Frontend/Hero';
import TabbedSection from '@/components/Frontend/TabbedSection';

export default function Home() {
  return (
    <>
      <section className="bg-blue-950">
        <Hero />
      </section>
      <section>
        <Brands />
      </section>
      <section className="bg-slate-100">
        <TabbedSection />
      </section>
      <section className="py-8 lg:py-24 bg-pink-100">
        <DoctorsList />
      </section>
      <section className="py-8 lg:py-24 bg-white">
        <DoctorsList title="In-person doctor visit" isInPerson />
      </section>
    </>
  );
}
