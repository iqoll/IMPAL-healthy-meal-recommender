// hooks/useTabBarSpace.ts
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TAB_BAR_HEIGHT, getTabBarBottom } from '@/constants/layout';

// Tinggi ruang yang tertutup floating tab bar.
// Pakai sebagai paddingBottom konten di screen tab agar isi paling bawah tidak tertutup.
export function useTabBarSpace(extra = 16) {
  const insets = useSafeAreaInsets();
  return getTabBarBottom(insets.bottom) + TAB_BAR_HEIGHT + extra;
}
