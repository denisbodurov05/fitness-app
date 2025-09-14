import Avatar from "@/components/Avatar";
import Icon from "@/components/Icon";
import Typography from "@/components/themed/Typography";
import { useTheme } from "@/providers";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Chip from "../Chip";

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
export default function HomeHeader({
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
          backgroundColor: theme.palette.background.default,
          paddingTop: insets.top + 12,
        },
      ]}
    >
      {/* Left side - User Avatar and Name */}
      <Pressable onPress={onAvatarPress} style={styles.avatarContainer}>
        <View style={styles.userSection}>
          <Avatar uri={userAvatarUri} name={userName} size={36} />
          <View>
            <View style={styles.userTitle}>
              <Typography
                variant="body1"
                style={styles.userName}
                color={theme.palette.text.primary}
              >
                {userName}
              </Typography>
            </View>
            <View style={styles.userSubtitle}>
              <Chip
                label="Level 12 • 2,340 XP"
                size="small"
                variant="success"
              />
            </View>
          </View>
        </View>
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
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  avatarContainer: {
    padding: 4,
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  userName: {
    fontWeight: "bold",
  },
  userTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  userSubtitle: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
    marginTop: 2,
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
