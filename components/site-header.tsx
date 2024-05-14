'use client';

import Link from 'next/link';
import ModeToggle from './ModeToggle';
import { Button } from './ui/button';
import { LogIn } from 'lucide-react';
import { Session } from 'next-auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';

export function SiteHeader({ session }: { session: Session | null }) {
  const user = session?.user;
  const router = useRouter();
  async function handleLogout() {
    await signOut();
    router.push('/login');
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b borer-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center gap-4">
            {session && session.user && user?.email ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    {user.image ? (
                      <AvatarImage src="https://github.com/shadcn.png" alt="" />
                    ) : (
                      <AvatarFallback>CN</AvatarFallback>
                    )}
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel className="text-center">
                    {user.name}
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="text-center font-light text-sm text-slate-500">
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/dashboard"></Link>Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleLogout()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
            )}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
