import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../../store/auth.store";
import { RegisterRequest, RegisterResponse } from "../../types";

export function useRegister() {
  const queryClient = useQueryClient();
  const { setUser, setToken, setLoading } = useAuthStore();

  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: async (data) =>
      Promise.resolve({
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
      console.error("Register error:", error);
    },
  });
}
