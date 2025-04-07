import { Plus } from '@tamagui/lucide-icons';
import {
  Button,
  XStack,
  YStack,
  Text,
  ScrollView,
  ActiveTodoList,
  TextArea,
  Form,
  View,
} from '@my/ui';
import { useRef, useState } from 'react';
import { Todo } from '@my/types';
import { Platform } from 'react-native';

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'Todo 1 lorem ipsum lorem upsum lorem ipsum lorem upsum lorem ipsum',
      isDone: false,
    },
    { id: '2', text: 'Todo 2', isDone: false },
    { id: '3', text: 'Todo 3', isDone: false },
    {
      id: '4',
      text: 'Todo 4 lorem i psum lorem ups um lorem ipsum lorem ups um lorem ip sum',
      isDone: false,
    },
    {
      id: '5',
      text: 'Todo 1 lorem ipsum lorem upsum lorem ipsum lorem upsum lorem ipsum',
      isDone: false,
    },
    { id: '6', text: 'Todo 2', isDone: false },
    { id: '7', text: 'Todo 3', isDone: false },
    {
      id: '8',
      text: 'Todo 4 lorem i psum lorem ups um lorem ipsum lorem ups um lorem ip sum',
      isDone: false,
    },
    {
      id: '9',
      text: 'Todo 1 lorem ipsum lorem upsum lorem ipsum lorem upsum lorem ipsum',
      isDone: false,
    },
    { id: '10', text: 'Todo 2', isDone: false },
    { id: '11', text: 'Todo 3', isDone: false },
    {
      id: '12',
      text: 'Todo 4 lorem i psum lorem ups um lorem ipsum lorem ups um lorem ip sum',
      isDone: false,
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        { id: Date.now().toString(), text: inputValue, isDone: false },
        ...todos,
      ]);
      setInputValue('');
    }
    if (Platform.OS === 'web' && textAreaRef.current) {
      const textarea = textAreaRef.current as HTMLTextAreaElement;
      textarea.style.height = 'auto'; // reset height
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const textAreaRef = useRef<any>(null);

  const handleTextChange = (text: string) => {
    setInputValue(text);
    if (Platform.OS === 'web' && textAreaRef.current) {
      const textarea = textAreaRef.current as HTMLTextAreaElement;
      textarea.style.height = 'auto'; // reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // grow to content
    }
  };

  return (
    <YStack
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      flex={1}
    >
      <Form width={'100%'} p={16}>
        <XStack gap="$2" width={'100%'}>
          {Platform.OS === 'web' ? (
            <TextArea
              rows={1}
              ref={textAreaRef}
              value={inputValue}
              onChangeText={handleTextChange}
              placeholder="Add a todo..."
              flex={1}
              py={8}
              fontSize={16}
              overflow="hidden"
              boxSizing="border-box"
              lineHeight={24}
              style={
                {
                  // resize: 'none',
                }
              }
              bg={'$white1'}
            />
          ) : (
            <TextArea
              bg={'$white1'}
              multiline
              value={inputValue}
              onChangeText={handleTextChange}
              placeholder="Add a todo..."
              flex={1}
              py={8}
              onSubmitEditing={addTodo}
              submitBehavior="submit"
            />
          )}

          {/* Save here for my future self, i bet you forget again right? - 7 apr 25 */}
          {/* <textarea
            ref={textAreaRef}
            rows={1}
            value={inputValue}
            placeholder="Add a todo..."
            onInput={(e) => {
              const value = e.currentTarget.value;
              setInputValue(value);
              if (textAreaRef.current) {
                const textarea = textAreaRef.current;
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;
              }
            }}
            style={{
              width: '100%',
              resize: 'none',
              overflow: 'hidden',
              padding: '8px',
              fontSize: '16px',
              lineHeight: '1.5',
              borderRadius: '8px',
              border: '1px solid #ccc',
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
            }}
          /> */}

          <Button
            size={44}
            height={44}
            aspectRatio={1}
            onPress={addTodo}
            icon={<Plus size={'$1.5'} />}
            bg="$black1"
            color="$white1"
          />
        </XStack>
      </Form>

      <ScrollView px={16} flex={1} width={'100%'}>
        <View
          style={{
            paddingBottom: 16,
          }}
        >
          {todos.length > 0 ? (
            <ActiveTodoList
              todos={todos}
              toggleComplete={toggleComplete}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          ) : (
            <Text color={'$accent1'}>Add your list here</Text>
          )}
        </View>
      </ScrollView>
    </YStack>
  );
}
