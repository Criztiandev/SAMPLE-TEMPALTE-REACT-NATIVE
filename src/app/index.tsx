import { Button } from "@/components/ui/button";
import type { FC } from "react";
import { Text, View } from "react-native";

const HomeScreen: FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4 text-center">
        Welcome to React Native Expo Base
      </Text>
      <Text className="text-base text-gray-600 text-center mb-3">
        Your clean slate is ready!
      </Text>
      <Text className="text-sm text-blue-500 text-center font-medium mb-6">
        TypeScript & NativeWind are properly configured! 🎉
      </Text>
      <Button>
        <Text>Get Started</Text>
      </Button>
    </View>
  );
};

export default HomeScreen;
