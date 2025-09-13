import { useTheme } from "@/providers";
import { ScrollView, StyleSheet } from "react-native";

export default function WorkoutScreen() {
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
