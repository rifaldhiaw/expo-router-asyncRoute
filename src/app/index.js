import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomePage() {
  const insets = useSafeAreaInsets();

  return (
    <div>
      <p>Downgrade react-native-safe-area-context": "4.6.3"</p>
      <p>insets : {JSON.stringify(insets)}</p>
    </div>
  );
}
