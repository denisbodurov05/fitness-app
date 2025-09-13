import { useTheme } from "@/providers";
import { ScrollView, StyleSheet } from "react-native";

export default function AchievementsScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.secondary[100] }]}
    ></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
