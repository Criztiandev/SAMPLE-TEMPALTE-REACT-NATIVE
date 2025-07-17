export type RootStackParamList = {
  index: undefined;
  // Add your routes here
  // Example:
  // profile: { userId: string };
  // settings: undefined;
};

export type TabParamList = {
  index: undefined;
  // Add tab routes here
  // Example:
  // home: undefined;
  // profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
