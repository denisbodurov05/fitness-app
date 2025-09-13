/**
 * Creates a color with alpha transparency
 * @param color - The base color (hex)
 * @param alpha - Alpha value between 0 and 1
 */
export function alpha(color: string, alpha: number): string {
  if (!color) return color;

  // Remove # if present
  const cleanColor = color.replace("#", "");

  // Convert to RGB
  const r = parseInt(cleanColor.substring(0, 2), 16);
  const g = parseInt(cleanColor.substring(2, 4), 16);
  const b = parseInt(cleanColor.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
