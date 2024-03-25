import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoOcrNbkViewProps } from './ExpoOcrNbk.types';

const NativeView: React.ComponentType<ExpoOcrNbkViewProps> =
  requireNativeViewManager('ExpoOcrNbk');

export default function ExpoOcrNbkView(props: ExpoOcrNbkViewProps) {
  return <NativeView {...props} />;
}
