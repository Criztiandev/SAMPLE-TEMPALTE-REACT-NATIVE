import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../../store/auth.store";

export function useLogout() {
  const queryClient = useQueryClient();
  const { logout } = useAuthStore();

  return useMutation<void, Error, void>({
    mutationFn: async () => Promise.resolve(),
    onSuccess: () => {
      logout();
      queryClient.clear();
    },
    onError: (error) => {
      console.error("Logout error:", error);
      // Force logout even on error
      logout();
      queryClient.clear();
    },
  });
}
