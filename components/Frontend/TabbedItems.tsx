'use client';

import { Tabs } from 'flowbite-react';
import { ServiceList } from './Services/ServiceList';
import LinkCards from './Doctors/LinkCards';
import { Activity, Microscope, Stethoscope, Syringe } from 'lucide-react';

const services = [
  {
    title: 'Telehealth',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'telehealth',
  },
  {
    title: 'Video prescription',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'telehealth',
  },
  {
    title: 'UTI consult',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'telehealth',
  },
  {
    title: 'Mental health',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'telehealth',
  },
  {
    title: 'ED consult',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'telehealth',
  },
  {
    title: 'Urgent Care',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'telehealth',
  },
];

const tabs = [
  {
    title: 'Popular Services',
    component: <ServiceList services={services} />,
    icon: Stethoscope,
    content: [],
  },
  {
    title: 'Doctors',
    component: <LinkCards />,
    icon: Microscope,
    content: [],
  },
  {
    title: 'Specialists',
    component: <LinkCards className="bg-blue-900" />,
    icon: Activity,
    content: [],
  },
  {
    title: 'Symptoms',
    component: <LinkCards className="bg-purple-950" />,
    icon: Syringe,
    content: [],
  },
];
export default function TabbedItems() {
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      {tabs.map((tab) => (
        <Tabs.Item key={tab.title} active title={tab.title} icon={tab.icon}>
          {tab.component}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
