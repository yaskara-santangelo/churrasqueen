import { AuthTabs } from '@/components/auth/auth-tabs';
import { LoginForm } from '@/components/auth/login-form';
import { PageHeader } from '@/components/layout/page-header';
import { createClient } from '@/lib/supabase/client';
import { redirect } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default async function LoginPage({ children }: Props) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) redirect('/dashboard')

  return (
    <div className="w-full max-w-md flex flex-col gap-6">
      <AuthTabs />

      <div>
        <PageHeader
          title="Entrar na conta"
          description="Organize o seu próximo churrasco em minutos"
        />

        <LoginForm />
      </div>
    </div>
  );
}