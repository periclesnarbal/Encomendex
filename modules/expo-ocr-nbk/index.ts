import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoOcrNbk.web.ts
// and on native platforms to ExpoOcrNbk.ts
import ExpoOcrNbkModule from './src/ExpoOcrNbkModule';
import ExpoOcrNbkView from './src/ExpoOcrNbkView';
import { ChangeEventPayload, ExpoOcrNbkViewProps } from './src/ExpoOcrNbk.types';

// Get the native constant value.
export const PI = ExpoOcrNbkModule.PI;

export function hello(): string {
  return ExpoOcrNbkModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoOcrNbkModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoOcrNbkModule ?? NativeModulesProxy.ExpoOcrNbk);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoOcrNbkView, ExpoOcrNbkViewProps, ChangeEventPayload };
