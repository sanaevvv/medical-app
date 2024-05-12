import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  title: string;
  icon?: any;
  href?: string;
  className?: string;
};
export default function CustomButton({ title, icon, href, className }: Props) {
  const Icon = icon;
  return (
    <>
      {href ? (
        <Button className={className} asChild>
          <Link href={href} className="flex items-center">
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {title}
          </Link>
        </Button>
      ) : (
        <Button className={className}>
          {Icon && <Icon className="mr-2 h-4 w-4" />}
          {title}
        </Button>
      )}
    </>
  );
}
