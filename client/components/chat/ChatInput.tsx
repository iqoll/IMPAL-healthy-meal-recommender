import { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '@/styles/global';

interface ChatInputProps {
  onSend: (text: string) => void;
  onMicPress?: () => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, onMicPress, disabled = false }: ChatInputProps) {
  const [text, setText] = useState('');
  const canSend = text.trim().length > 0 && !disabled;

  const handleSend = () => {
    if (!canSend) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <View style={styles.container}>
      {/* Tombol Mikrofon */}
      <TouchableOpacity onPress={onMicPress} style={styles.micButton} activeOpacity={0.7} hitSlop={8}>
        <Ionicons name="mic-outline" size={24} color={colors.text} />
      </TouchableOpacity>

      {/* Kolom Pesan */}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Write your message here..."
        placeholderTextColor={colors.text}
        style={styles.input}
        multiline
      />

      {/* Tombol Kirim */}
      <TouchableOpacity
        onPress={handleSend}
        disabled={!canSend}
        style={[styles.sendButton, !canSend && styles.sendButtonDisabled]}
        activeOpacity={0.8}
      >
        <Ionicons name="paper-plane-outline" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 999,
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  micButton: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    maxHeight: 100,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.text,
    paddingVertical: 8,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});
