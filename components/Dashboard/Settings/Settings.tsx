import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GeneralSettings } from './GeneralSettings';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const labels = [
  {
    label: 'General',
    component: <GeneralSettings />,
  },
  {
    label: 'Security',
    component: <GeneralSettings />,
  },
  {
    label: 'Integrations',
    component: <GeneralSettings />,
  },
  {
    label: 'Support',
    component: <GeneralSettings />,
  },
  {
    label: 'Organizations',
    component: <GeneralSettings />,
  },
  {
    label: 'Advanced',
    component: <GeneralSettings />,
  },
];

const tabs = labels.map(({ label, component }) => ({
  label,
  component,
  value: label.toLocaleLowerCase(),
}));

export default function Settings() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
      <Tabs defaultValue="general">
        <div className="flex items-center">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
              </span>
            </Button>
          </div>
        </div>
        {tabs.map((tab) => (
          <TabsContent key={tab.label} value={tab.value}>
            {tab.component}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
