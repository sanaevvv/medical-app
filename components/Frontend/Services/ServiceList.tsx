import React from 'react';
import { ServiceCard } from './ServiceCard';
import { ServiceType } from '@/types/types';

type Props = {
  services: ServiceType[];
};
export const ServiceList = ({ services }: Props) => {
  const serviceCards = services.map((service) => (
    <ServiceCard key={service.title} {...service} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {serviceCards}
    </div>
  );
};
