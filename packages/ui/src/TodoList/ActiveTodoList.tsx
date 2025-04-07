import { XStack, ListItem, YStack, Text, Checkbox } from 'tamagui';
import { Todo } from '@my/types';
import { IconBtnAction } from './IconBtnAction';
import { Check as CheckIcon } from '@tamagui/lucide-icons';

export const ActiveTodoList = ({
  todos,
  toggleComplete,
  editTodo,
  deleteTodo,
}: {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <YStack justify="center" gap="$2.5" width={'100%'}>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          radiused
          bordered
          bg={'$white1'}
          hoverTheme
          pressTheme
          width={'100%'}
          pressStyle={{
            backgroundColor: '$white2',
          }}
        >
          <XStack width={'100%'} style={{ alignItems: 'center' }} gap="$3">
            <Checkbox
              shrink={0}
              bg={'white'}
              onCheckedChange={() => toggleComplete(todo.id)}
            >
              <Checkbox.Indicator>
                <CheckIcon strokeWidth={5} />
              </Checkbox.Indicator>
            </Checkbox>

            <Text flex={1}>{todo.text}</Text>

            <XStack gap={'$3'} shrink={0}>
              <IconBtnAction icon="Pen" callback={() => {}} />
              <IconBtnAction
                icon="Trash"
                callback={() => deleteTodo(todo.id)}
              />
            </XStack>
          </XStack>
        </ListItem>
      ))}
    </YStack>
  );
};
