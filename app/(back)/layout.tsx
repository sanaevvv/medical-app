import Navbar from '@/components/Dashboard/NavBar';
import Sidebar from '@/components/Dashboard/Sidebar';
import { Button } from '@/components/ui/button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar session={session} />
        <div className="flex min-h-screen w-full flex-col">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
