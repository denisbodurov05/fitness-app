import { useTheme } from "@/providers";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AchievementsScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: theme.palette.background.default },
        ]}
      ></ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
