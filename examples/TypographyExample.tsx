// Example usage of the Typography system

import Typography from "@/components/themed/Typography";
import { View } from "react-native";

export default function TypographyExample() {
  return (
    <View style={{ padding: 16 }}>
      {/* Headers */}
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>

      {/* Subtitles */}
      <Typography variant="subtitle1">Subtitle 1 - Larger subtitle</Typography>
      <Typography variant="subtitle2">Subtitle 2 - Smaller subtitle</Typography>

      {/* Body text */}
      <Typography variant="body1">
        Body 1 - This is the default body text with good readability for longer
        content sections and articles.
      </Typography>
      <Typography variant="body2">
        Body 2 - Smaller body text for secondary information or when space is
        limited.
      </Typography>

      {/* Button and UI text */}
      <Typography variant="button">BUTTON TEXT</Typography>
      <Typography variant="caption">
        Caption text for image descriptions
      </Typography>
      <Typography variant="overline">OVERLINE FOR SECTIONS</Typography>

      {/* Custom styling examples */}
      <Typography
        variant="h4"
        color="#FF6B6B"
        align="center"
        style={{ marginTop: 20 }}
      >
        Custom Colored Centered Title
      </Typography>
    </View>
  );
}
