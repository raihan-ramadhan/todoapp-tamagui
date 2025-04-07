import { Pen, Trash } from '@tamagui/lucide-icons';

export const iconMap = {
  Pen,
  Trash,
} as const;

export type IconName = keyof typeof iconMap;
