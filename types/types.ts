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
