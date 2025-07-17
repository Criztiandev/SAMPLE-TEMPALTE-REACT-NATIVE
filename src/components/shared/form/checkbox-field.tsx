import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Pressable, Text, View } from "react-native";

interface CheckboxFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  descriptionClassName?: string;
  checkboxClassName?: string;
  defaultValue?: boolean;
}

const CheckboxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  label,
  description,
  required = false,
  disabled = false,
  className,
  labelClassName,
  errorClassName,
  descriptionClassName,
  checkboxClassName,
  defaultValue = false,
}: CheckboxFieldProps<TFieldValues, TName>) => {
  const form = useFormContext<TFieldValues>();

  if (!form) {
    throw new Error("CheckboxField must be used within a Form component");
  }

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <View className={cn("gap-1", className)}>
          <Pressable
            onPress={() => {
              if (!disabled) {
                field.onChange(!field.value);
              }
            }}
            className="flex-row items-center gap-2"
          >
            <Checkbox
              checked={field.value || defaultValue}
              onCheckedChange={(checked) => {
                field.onChange(checked);
              }}
              disabled={disabled}
              className={cn(
                fieldState.error && "border-red-500",
                checkboxClassName
              )}
            />

            {label && (
              <Text
                className={cn(
                  "text-sm font-medium text-foreground flex-1",
                  disabled && "opacity-50",
                  labelClassName
                )}
              >
                {label}
                {required && <Text className="text-red-500"> *</Text>}
              </Text>
            )}
          </Pressable>

          {description && (
            <Text
              className={cn(
                "text-xs text-muted-foreground ml-6",
                descriptionClassName
              )}
            >
              {description}
            </Text>
          )}

          {fieldState.error && (
            <Text className={cn("text-xs text-red-500 ml-6", errorClassName)}>
              {fieldState.error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default CheckboxField;
