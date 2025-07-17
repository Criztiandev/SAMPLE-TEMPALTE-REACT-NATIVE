import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  type Option,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Text, View } from "react-native";

export interface SelectOption {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  descriptionClassName?: string;
  triggerClassName?: string;
  defaultValue?: string;
}

const SelectField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  label,
  placeholder = "Select an option",
  options,
  description,
  required = false,
  disabled = false,
  className,
  labelClassName,
  errorClassName,
  descriptionClassName,
  triggerClassName,
  defaultValue,
}: SelectFieldProps<TFieldValues, TName>) => {
  const form = useFormContext<TFieldValues>();

  if (!form) {
    throw new Error("SelectField must be used within a Form component");
  }

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState }) => {
        const selectedOption = options.find((opt) => opt.value === field.value);
        const currentValue: Option = selectedOption
          ? { value: selectedOption.value, label: selectedOption.label }
          : undefined;

        const defaultOption = options.find((opt) => opt.value === defaultValue);
        const defaultValueOption: Option = defaultOption
          ? { value: defaultOption.value, label: defaultOption.label }
          : undefined;

        return (
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

            <Select
              value={currentValue}
              defaultValue={defaultValueOption}
              onValueChange={(option) => {
                field.onChange(option?.value || "");
              }}
              disabled={disabled}
            >
              <SelectTrigger
                className={cn(
                  fieldState.error && "border-red-500",
                  triggerClassName
                )}
              >
                <SelectValue
                  placeholder={placeholder}
                  className="text-foreground"
                />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    disabled={option.disabled}
                  />
                ))}
              </SelectContent>
            </Select>

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
        );
      }}
    />
  );
};

export default SelectField;
