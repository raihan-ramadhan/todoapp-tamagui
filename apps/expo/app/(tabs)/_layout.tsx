import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { YStack } from '@my/ui';
import { useLink } from 'solito/navigation';
import { Settings } from '@tamagui/lucide-icons';

export default function TabLayout() {
  const linkProps = useLink({
    href: `/settings`,
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: 75,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 2,
          marginBottom: 'auto',
        },
        tabBarIconStyle: {
          marginTop: 'auto',
        },
        headerRight: () => (
          <YStack mx={16}>
            <Pressable {...linkProps}>
              <Settings size={24} />
            </Pressable>
          </YStack>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Todo List',
          title: 'Todo',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              size={20}
              name={'check-square'}
              color={color}
              solid={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="completed"
        options={{
          headerTitle: 'Completed List',
          title: 'Completed',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={23}
              name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
