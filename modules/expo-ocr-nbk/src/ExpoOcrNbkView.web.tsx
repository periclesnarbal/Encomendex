import * as React from 'react';

import { ExpoOcrNbkViewProps } from './ExpoOcrNbk.types';

export default function ExpoOcrNbkView(props: ExpoOcrNbkViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
