import FormSubmit from "@/components/shared/form/form-submit";
import InputField from "@/components/shared/form/input-field";
import ScreenLayout from "@/components/template/base/screen-layout";
import { Text } from "@/components/ui/text";
import { loginSchema } from "@/feature/auth/auth.validation";
import { useLogin } from "@/feature/auth/hooks/mutation";
import { LoginFormData } from "@/feature/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { ActivityIndicator, Alert, View } from "react-native";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login(data, {
      onSuccess: () => {
        router.replace("/(tabs)/home");
      },
      onError: (error) => {
        Alert.alert("Login Failed", error.message);
      },
    });
  };

  return (
    <ScreenLayout>
      <Form {...form}>
        <View className="space-y-4">
          <InputField
            name="email"
            label="Email"
            placeholder="Enter your email"
          />

          <InputField
            name="password"
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
          />

          <FormSubmit onSubmit={onSubmit} isPending={isPending}>
            {isPending ? (
              <View className="flex-row items-center gap-2">
                <ActivityIndicator />
                <Text>Logging in...</Text>
              </View>
            ) : (
              <Text>Login</Text>
            )}
          </FormSubmit>
        </View>
      </Form>
    </ScreenLayout>
  );
}
