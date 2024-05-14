import { UserRole } from '@prisma/client';

export type ServiceType = {
  title: string;
  image: string;
  slug: string;
};

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: UserRole;
};

export type LoginInputProps = {
  email: string;
  password: string;
};

export type MainNavItem = {
  title: string;
  href: string;
};

export type SidebarNavItem = {
  title: string;
  items: {
    title: string;
    href: string;
    items: [];
    label?: string;
  }[];
};
