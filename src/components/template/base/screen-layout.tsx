import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";

interface Props extends PropsWithChildren {
  scrollable?: boolean;
  className?: string;
  contentClassName?: string;
}

const ScreenLayout = ({
  children,
  scrollable = true,
  className = "",
  contentClassName = "",
}: Props) => {
  if (scrollable) {
    return (
      <ScrollView
        className={`flex-1 bg-white ${className}`}
        contentContainerStyle={{ flexGrow: 1 }}
        contentContainerClassName={contentClassName}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    );
  }

  return <View className={`flex-1 bg-white ${className}`}>{children}</View>;
};

export default ScreenLayout;
