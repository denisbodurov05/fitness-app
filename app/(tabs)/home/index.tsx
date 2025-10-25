import { useTheme } from "@/providers";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.palette.background.default },
      ]}
    ></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
