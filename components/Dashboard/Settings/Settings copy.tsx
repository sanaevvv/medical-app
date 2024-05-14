import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GeneralSettings } from './GeneralSettings';

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
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="">
          <Tabs defaultValue="general" className="">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.label} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.label} value={tab.value}>
                {tab.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  );
}
