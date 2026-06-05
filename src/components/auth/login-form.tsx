'use client';

import { Button } from '@/components/ui/button';
import { FieldSet } from '@/components/ui/field';
import { ControllerFieldInput } from '../common/controlled-field-input';
import { LoginInput, loginSchema } from '@/lib/validations/auth';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '@/actions/auth';
import { FormErrorAlert } from '../common/form-error-alert';

export function LoginForm() {
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: LoginInput) {
    setServerError(null);
    const result = await login(data);
    if (result?.error) setServerError(result.error);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="flex flex-col w-full gap-4">
      <FieldSet className="flex gap-3">
        <ControllerFieldInput
          control={form.control}
          name="email"
          label="E-mail"
          type="email"
          required
          autocomplete="email"
        />

        <ControllerFieldInput
          control={form.control}
          name="password"
          label="Senha"
          type="password"
          autocomplete='"current-password'
          required
        />

        <FormErrorAlert message={serverError} />

        <Button
          className="w-full rounded-lg"
          type="submit"
          disabled={form.formState.isSubmitting}
          aria-busy={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Entrando...' : 'Entrar'}
        </Button>
      </FieldSet>
    </form>
  );
}
