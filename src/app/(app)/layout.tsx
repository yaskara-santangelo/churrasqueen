import Image from 'next/image';
import Link from 'next/link';

import { logout } from '@/actions/auth';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getProfile } from '@/lib/queries/profile';
import { createClient } from '@/lib/supabase/server';

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default async function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();
  const profile = await getProfile(supabase);

  const fullName = profile?.name ?? '';
  const firstName = fullName.split(' ')[0] || 'Rainha';
  const initials = fullName ? getInitials(fullName) : 'CK';
  return (
    <>
      <header className="flex items-center justify-between bg-primary-foreground w-full h-14 px-6">
        <nav>
          <Link className="flex items-center gap-2" href="/dashboard">
            <div className="relative w-8 h-8 bg-primary rounded-md">
              <Image
                src="/mascot.png"
                alt="Logo"
                sizes="32px"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <span className="text-white font-medium">
              Churras<span className="text-primary">Queen</span>
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-2 bg-white/10 rounded-full p-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full h-8 w-8" variant="ghost" size="icon">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary text-foreground">{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <form action={logout} className="w-full">
                    <button type="submit" className="w-full text-left text-destructive">
                      Log out
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="text-white text-sm">{firstName}</span>
        </div>
      </header>

      {children}
    </>
  );
}
