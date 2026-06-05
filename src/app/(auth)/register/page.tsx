import { AuthTabs } from "@/components/auth/auth-tabs";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { PageHeader } from "@/components/layout/page-header";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md flex flex-col gap-6">
      <AuthTabs />

      <div>
        <PageHeader
          title="Criar conta"
          description="Crie sua conta e comece a organizar."
        />

        <RegisterForm />
      </div>
    </div>
  );
}