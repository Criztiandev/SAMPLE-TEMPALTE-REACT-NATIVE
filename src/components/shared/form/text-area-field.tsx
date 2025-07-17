import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Text, TextInputProps, View } from "react-native";

interface TextareaFieldProps<
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
  numberOfLines?: number;
}

const TextareaField = <
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
  numberOfLines = 4,
  ...props
}: TextareaFieldProps<TFieldValues, TName>) => {
  const form = useFormContext<TFieldValues>();

  if (!form) {
    throw new Error("TextareaField must be used within a Form component");
  }

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <View className={cn("gap-1", className)}>
          {label && (
            <Text
              className={cn(
                "text-sm font-medium text-foreground",
                labelClassName
              )}
            >
              {label}
              {required && <Text className="text-red-500"> *</Text>}
            </Text>
          )}

          <Textarea
            {...props}
            value={field.value ?? ""}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            numberOfLines={numberOfLines}
            className={cn(
              fieldState.error && "border-red-500",
              (props as TextInputProps).className
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

export default TextareaField;
