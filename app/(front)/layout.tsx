import { MegaMenu } from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      {/* <div className="bg-blue-700/20 w-full py-4 fixed top-20 z-50 backdrop-blur-md border-[#fefefe7d] border-b-[1px]">
        <MegaMenu />
      </div> */}
      {/* <div className="mt-[9.6rem]">{children}</div> */}
      <div className="mt-[60px]">{children}</div>
    </div>
  );
};

export default Layout;
