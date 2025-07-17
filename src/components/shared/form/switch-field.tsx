import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Pressable, Text, View } from "react-native";

interface SwitchFieldProps<
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
  switchClassName?: string;
  defaultValue?: boolean;
}

const SwitchField = <
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
  switchClassName,
  defaultValue = false,
}: SwitchFieldProps<TFieldValues, TName>) => {
  const form = useFormContext<TFieldValues>();

  if (!form) {
    throw new Error("SwitchField must be used within a Form component");
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
            className="flex-row items-center justify-between"
          >
            <View className="flex-1">
              {label && (
                <Text
                  className={cn(
                    "text-sm font-medium text-foreground",
                    disabled && "opacity-50",
                    labelClassName
                  )}
                >
                  {label}
                  {required && <Text className="text-red-500"> *</Text>}
                </Text>
              )}

              {description && (
                <Text
                  className={cn(
                    "text-xs text-muted-foreground mt-1",
                    descriptionClassName
                  )}
                >
                  {description}
                </Text>
              )}
            </View>

            <Switch
              checked={field.value || defaultValue}
              onCheckedChange={(checked) => {
                field.onChange(checked);
              }}
              disabled={disabled}
              className={switchClassName || ""}
            />
          </Pressable>

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

export default SwitchField;
