import { Toaster } from 'react-hot-toast';
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </div>
  );
};
