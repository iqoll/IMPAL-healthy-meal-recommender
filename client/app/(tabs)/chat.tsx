import { useRef, useState } from 'react';
import { View, FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/styles/global';
import { ChatMessage } from '@/types/chat';
import { INITIAL_MESSAGES, createUserMessage, sendChatMessage } from '@/services/chat';
import { useKeyboardVisible } from '@/hooks/useKeyboardVisible';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatInput from '@/components/chat/ChatInput';
import DateSeparator from '@/components/chat/DateSeparator';
import MessageBubble from '@/components/chat/MessageBubble';

const TYPING_MESSAGE: ChatMessage = {
  id: 'typing',
  role: 'assistant',
  text: 'Typing...',
  createdAt: new Date(),
};

const isDifferentDay = (a: Date, b: Date) => a.toDateString() !== b.toDateString();

export default function ChatScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const listRef = useRef<FlatList<ChatMessage>>(null);
  const keyboardVisible = useKeyboardVisible();

  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);

  const handleBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

  const handleSend = async (text: string) => {
    setMessages((prev) => [...prev, createUserMessage(text)]);
    setIsTyping(true);

    try {
      const reply = await sendChatMessage(text);
      setMessages((prev) => [...prev, reply]);
    } finally {
      setIsTyping(false);
    }
  };

  const data = isTyping ? [...messages, TYPING_MESSAGE] : messages;
  const scrollToBottom = () => listRef.current?.scrollToEnd({ animated: true });

  // Saat keyboard terbuka, jarak untuk home indicator tidak diperlukan lagi
  const inputBottomPadding = keyboardVisible ? 8 : Math.max(insets.bottom, 12) + 8;

  return (
    // Android edge-to-edge tidak otomatis mengecilkan layar saat keyboard muncul,
    // jadi behavior 'padding' dipakai di kedua platform.
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ChatHeader
        onBackPress={handleBack}
        onMenuPress={() => {}} // nanti diganti ke menu opsi chat
      />

      <FlatList
        ref={listRef}
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        onContentSizeChange={scrollToBottom} // Pesan baru masuk
        onLayout={scrollToBottom}            // Tinggi list berubah karena keyboard
        renderItem={({ item, index }) => {
          const prev = data[index - 1];
          const showDate = !prev || isDifferentDay(prev.createdAt, item.createdAt);

          return (
            <View>
              {showDate && <DateSeparator date={item.createdAt} />}
              <MessageBubble
                message={item}
                onAddRecipePress={() => {}} // nanti diganti ke tambah ke Daily Meals
                onRecipePress={() => {}}    // nanti diganti ke halaman resep
              />
            </View>
          );
        }}
      />

      <View style={[styles.inputWrapper, { paddingBottom: inputBottomPadding }]}>
        <ChatInput
          onSend={handleSend}
          onMicPress={() => {}} // nanti diganti ke input suara
          disabled={isTyping}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  inputWrapper: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});
