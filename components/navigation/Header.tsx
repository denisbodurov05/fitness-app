import Avatar from "@/components/Avatar";
import Icon from "@/components/Icon";
import { useTheme } from "@/providers";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface AppHeaderProps {
  /**
   * User's avatar image URL
   */
  userAvatarUri?: string;
  /**
   * User's name for generating avatar initials
   */
  userName?: string;
  /**
   * Callback when avatar is pressed
   */
  onAvatarPress?: () => void;
  /**
   * Callback when notification bell is pressed
   */
  onNotificationPress?: () => void;
  /**
   * Whether there are unread notifications
   */
  hasUnreadNotifications?: boolean;
}

/**
 * Consistent app header with user avatar and notifications
 */
export default function AppHeader({
  userAvatarUri,
  userName = "User",
  onAvatarPress,
  onNotificationPress,
  hasUnreadNotifications = false,
}: AppHeaderProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palette.secondary.lighter,
          paddingTop: insets.top + 12,
        },
      ]}
    >
      {/* Left side - User Avatar */}
      <Pressable onPress={onAvatarPress} style={styles.avatarContainer}>
        <Avatar uri={userAvatarUri} name={userName} size={36} />
      </Pressable>

      {/* Right side - Notification Bell */}
      <Pressable
        onPress={onNotificationPress}
        style={styles.notificationContainer}
      >
        <View>
          <Icon
            library="Octicons"
            name="bell-fill"
            size={24}
            color={theme.palette.text.secondary}
          />
          {hasUnreadNotifications && (
            <View
              style={[
                styles.notificationBadge,
                { backgroundColor: theme.palette.error.main },
              ]}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 12,
    elevation: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  avatarContainer: {
    padding: 4,
  },
  notificationContainer: {
    padding: 8,
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
