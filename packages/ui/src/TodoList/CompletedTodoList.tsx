import { XStack, ListItem, Checkbox, YStack, Text } from 'tamagui';
import { Check as CheckIcon } from '@tamagui/lucide-icons';
import { CompletedTask } from '@my/types';
import { format } from 'timeago.js';

export const CompletedTodoList = ({
  todos,
  toggleComplete,
}: {
  todos: CompletedTask[];
  toggleComplete: (id: string) => void;
}) => {
  return (
    <YStack justify="center" gap="$2.5" width="100%">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          radiused
          hoverTheme
          pressTheme
          width={'100%'}
          bg="$white4"
          hoverStyle={{
            backgroundColor: '$white5',
          }}
        >
          <XStack width={'100%'} style={{ alignItems: 'center' }} gap="$4">
            <Checkbox
              shrink={0}
              bg={'$white10'}
              pressStyle={{
                backgroundColor: '$white8',
              }}
              defaultChecked={true}
              onCheckedChange={() => toggleComplete(todo.id)}
            >
              <Checkbox.Indicator>
                <CheckIcon color={'$white1'} strokeWidth={5} />
              </Checkbox.Indicator>
            </Checkbox>
            <Text
              flex={1}
              style={{
                textDecorationLine: 'line-through',
              }}
              color={'$white10'}
            >
              {todo.text}
            </Text>

            <Text color={'$white10'}>
              {format(new Date(todo.dateCompleted), 'en_US', )}
            </Text>
          </XStack>
        </ListItem>
      ))}
    </YStack>
  );
};
