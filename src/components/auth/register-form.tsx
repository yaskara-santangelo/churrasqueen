'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { register } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { FieldSet } from '@/components/ui/field';
import { FormErrorAlert } from '@/components/common/form-error-alert';
import { RegisterInput, registerSchema } from '@/lib/validations/auth';
import { ControllerFieldInput } from '@/components/common/controlled-field-input';

export function RegisterForm() {
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(data: RegisterInput) {
    setServerError(null);
    const result = await register(data);
    if (result?.error) setServerError(result.error);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="flex flex-col w-full gap-4">
      <FieldSet className="flex gap-3">
        <ControllerFieldInput control={form.control} name="name" label="Nome" required />

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
          required
          autocomplete="new-password"
        />

        <ControllerFieldInput
          control={form.control}
          name="confirmPassword"
          label="Confirme a senha"
          type="password"
          required
          autocomplete="new-password"
        />

        <FormErrorAlert message={serverError} />

        <Button
          className="rounded-lg"
          type="submit"
          disabled={form.formState.isSubmitting}
          aria-busy={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Criando conta...' : 'Criar conta'}
        </Button>
      </FieldSet>
    </form>
  );
}
