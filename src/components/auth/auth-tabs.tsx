'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AuthTabs() {
  const pathname = usePathname();
  const isLogin = pathname == '/login';
  return (
    <div className="flex border border-border rounded-lg overflow-hidden mb-6">
      <Link
        className={cn(
          'flex-1 py-2 text-sm font-medium text-center transition-colors',
          isLogin
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
        href="/login"
        aria-current={isLogin ? 'page' : undefined}
      >
        Entrar
      </Link>

      <Link
        className={cn(
          'flex-1 py-2 text-sm font-medium text-center transition-colors',
          isLogin
            ? 'text-muted-foreground hover:text-foreground'
            : 'bg-primary text-primary-foreground'
        )}
        href="/register"
        aria-current={isLogin ? undefined : 'page'}
      >
        Criar conta
      </Link>
    </div>
  );
}
