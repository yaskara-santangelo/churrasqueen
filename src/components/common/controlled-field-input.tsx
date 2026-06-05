import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

type ControllerFieldInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  hideLabel?: boolean;
  className?: string;
  autocomplete?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export function ControllerFieldInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  required = false,
  hideLabel = false,
  className,
  autocomplete = 'off',
  inputProps,
}: ControllerFieldInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field className={className} data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name} className={hideLabel ? 'sr-only' : undefined}>
            {label}
            {!required && (
              <span className="text-muted-foreground font-normal text-xs ml-1">(opcional)</span>
            )}
          </FieldLabel>
          <Input
            className="border rounded-3xl"
            type={type}
            id={field.name}
            aria-invalid={fieldState.invalid}
            autoComplete={autocomplete}
            placeholder={placeholder}
            {...field}
            {...inputProps}
          />
          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
