import { Footer } from "@/components/Frontend/Footer";
import { MegaMenu } from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";
import { SiteHeader } from "@/components/site-header";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Layout = async({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      {/* <Navbar /> */}
      <SiteHeader session={session} />
      {/* <div className="bg-blue-700/20 w-full py-4 fixed top-20 z-50 backdrop-blur-md border-[#fefefe7d] border-b-[1px]">
        <MegaMenu />
      </div> */}
      {/* <div className="mt-[9.6rem]">{children}</div> */}
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
