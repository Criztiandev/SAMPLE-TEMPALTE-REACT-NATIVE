import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Text, TextInputProps, View } from "react-native";

interface InputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<TextInputProps, "value" | "onChangeText"> {
  name: TName;
  label?: string;
  description?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  descriptionClassName?: string;
}

const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  label,
  description,
  required = false,
  className,
  labelClassName,
  errorClassName,
  descriptionClassName,
  ...props
}: InputFieldProps<TFieldValues, TName>) => {
  const form = useFormContext<TFieldValues>();

  if (!form) {
    throw new Error("InputField must be used within a Form component");
  }

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <View className={cn("gap-1", className)}>
          {label && (
            <Label
              className={cn(
                "text-sm font-medium text-foreground",
                labelClassName
              )}
            >
              {label}
              {required && <Text className="text-red-500"> *</Text>}
            </Label>
          )}

          <Input
            {...props}
            value={field.value ?? ""}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            className={cn(
              fieldState.error && "border-red-500",
              (props as TextInputProps)?.className
            )}
          />

          {description && (
            <Text
              className={cn(
                "text-xs text-muted-foreground",
                descriptionClassName
              )}
            >
              {description}
            </Text>
          )}

          {fieldState.error && (
            <Text className={cn("text-xs text-red-500", errorClassName)}>
              {fieldState.error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default InputField;
