import { Button } from 'tamagui';
import { IconName, iconMap } from './IconMap';
import { HelpCircle } from '@tamagui/lucide-icons';
export const IconBtnAction = ({
  icon,
  callback,
}: {
  icon: IconName;
  callback: () => void;
}) => {
  const LucideIcon = iconMap[icon] ?? HelpCircle; // Fallback icon

  return (
    <Button
      icon={<LucideIcon size={'$1'} />}
      aspectRatio={1}
      size={'$2'}
      onPress={callback}
      bg="transparent"
      color="black"
    />
  );
};
