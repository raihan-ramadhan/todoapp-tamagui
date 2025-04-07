import { YStack, Text, ScrollView, CompletedTodoList } from '@my/ui';
import { useState } from 'react';
import { CompletedTask } from '@my/types';

export function CompletedScreen({
  pagesMode = false,
}: {
  pagesMode?: boolean;
}) {
  const [todos, setTodos] = useState<CompletedTask[]>([
    {
      id: '1',
      text: 'Todo 1 lorem ipsum lorem upsum lorem ipsum lorem upsum lorem ipsum',
      dateCompleted: '2025-04-05T23:06:18.054Z',
    },
    {
      id: '2',
      text: 'Todo 2',
      dateCompleted: '2025-04-05T23:08:48.426Z',
    },
    {
      id: '3',
      text: 'Todo 3',
      dateCompleted: '2025-04-05T23:08:48.426Z',
    },
    {
      id: '4',
      text: 'Todo 4 lorem i psum lorem ups um lorem ipsum lorem ups um lorem ip sum',
      dateCompleted: '2016-06-12',
    },
  ]);

  const toggleComplete = (id: string) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
  };

  return (
    <ScrollView flex={1}>
      <YStack justify="flex-start" items="center" gap="$4" p="$4">
        {todos.length > 0 ? (
          <CompletedTodoList todos={todos} toggleComplete={toggleComplete} />
        ) : (
          <Text color={'$accent1'}>You not have completed list</Text>
        )}
      </YStack>
    </ScrollView>
  );
}
