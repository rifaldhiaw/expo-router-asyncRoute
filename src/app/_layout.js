import { Tabs } from "expo-router/tabs";

export default function AdminLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="login" />
    </Tabs>
  );
}
