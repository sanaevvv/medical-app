import { MegaMenu } from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-950">
      <Navbar />
      <div className="max-w-5xl mx-auto py-6">
        <MegaMenu />
      </div>
      {children}
    </div>
  );
};

export default Layout;
