import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import SignInScreen from '.';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SignInScreen></SignInScreen>
  );
}
