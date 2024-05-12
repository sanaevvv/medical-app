import NavBar from '@/components/Dashboard/NavBar';
import Sidebar from '@/components/Dashboard/Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <p className="p-8">{children}</p>
      </div>
    </div>
  );
};

export default Layout;
