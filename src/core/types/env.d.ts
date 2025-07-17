/**
 * Environment Variables Type Definitions
 *
 * This file provides TypeScript support for environment variables.
 * It ensures type safety when accessing process.env variables.
 */

declare namespace NodeJS {
  interface ProcessEnv {
    // Node Environment
    NODE_ENV: "development" | "production" | "test";

    // Expo Public Environment Variables (accessible in client)
    EXPO_PUBLIC_API_URL?: string;
  }
}

// Extend the global namespace for Expo Constants
declare global {
  namespace Expo {
    interface Constants {
      expoConfig?: {
        extra?: {
          [key: string]: any;
        };
      };
    }
  }
}
