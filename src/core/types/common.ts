// Common type definitions for the application

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  error?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NavigationProps {
  navigation: any; // Replace with proper navigation types
  route: any; // Replace with proper route types
}

export type LoadingState = "idle" | "loading" | "succeeded" | "failed";

export interface AsyncState<T> {
  data: T | null;
  status: LoadingState;
  error: string | null;
}
