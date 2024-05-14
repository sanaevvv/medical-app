'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { docsConfig } from '@/config/docs';

const MainNav = () => {
  const pathname = usePathname();
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="sr-only">Medical Care</span>
        <Image
          className="h-8 w-auto"
          src="/logo.png"
          alt="ロゴ"
          width={30}
          height={30}
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {docsConfig.mainNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'transition-colors hover-text-foreground/80',
              pathname === link.href ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
