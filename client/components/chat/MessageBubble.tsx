import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '@/styles/global';
import { ChatMessage } from '@/types/chat';
import RecipeCard from './RecipeCard';

interface MessageBubbleProps {
  message: ChatMessage;
  onAddRecipePress?: () => void;
  onRecipePress?: () => void;
}

// Mengubah "teks **tebal** biasa" menjadi potongan Text dengan bagian tebal
function renderFormattedText(text: string, boldStyle: object) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <Text key={index} style={boldStyle}>
        {part.slice(2, -2)}
      </Text>
    ) : (
      part
    )
  );
}

export default function MessageBubble({ message, onAddRecipePress, onRecipePress }: MessageBubbleProps) {
  if (message.role === 'user') {
    return (
      <View style={[styles.bubble, styles.userBubble]}>
        <Text style={[styles.text, styles.userText]}>
          {renderFormattedText(message.text, styles.bold)}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.assistantRow}>
      {/* Avatar AI (placeholder sampai gambar maskot tersedia) */}
      <View style={styles.avatar}>
        <Ionicons name="sparkles" size={18} color={colors.primary} />
      </View>

      <View style={styles.assistantContent}>
        <View style={[styles.bubble, styles.assistantBubble]}>
          <Text style={styles.text}>{renderFormattedText(message.text, styles.bold)}</Text>
        </View>

        {message.recipe && (
          <RecipeCard
            recipe={message.recipe}
            onAddPress={onAddRecipePress}
            onRecipePress={onRecipePress}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 24,
  },
  userBubble: {
    alignSelf: 'flex-end',
    maxWidth: '80%',
    backgroundColor: colors.primary,
    borderBottomRightRadius: 0,
    marginBottom: 20,
  },
  assistantRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  assistantContent: {
    flex: 1,
  },
  assistantBubble: {
    alignSelf: 'flex-start',
    backgroundColor: colors.surface,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 21,
    color: colors.text,
  },
  userText: {
    color: '#FFFFFF',
  },
  bold: {
    fontFamily: fonts.semiBold,
  },
});
