import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../../store/auth.store";
import { LoginRequest, LoginResponse } from "../../types";

export function useLogin() {
  const queryClient = useQueryClient();
  const { setUser, setToken, setLoading } = useAuthStore();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: async (credentials) =>
      Promise.resolve<LoginResponse>({
        user: {
          id: "1",
          email: "test@test.com",
          name: "John Doe",
        },
        token: "1234567890",
      }),
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.token);
      setLoading(false);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      setLoading(false);
      console.error("Login error:", error);
    },
  });
}
