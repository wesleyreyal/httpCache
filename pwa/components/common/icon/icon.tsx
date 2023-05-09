import React from 'react';
import {
  Box,
  Check,
  ChevronDown,
  ChevronLeft,
  Code,
  Cpu,
  Icon as FeatherIcon,
  Maximize2,
  Plus,
  Server,
  Trash2,
} from 'react-feather';

export type AllowedIcons =
  | 'box'
  | 'server'
  | 'code'
  | 'extensible'
  | 'performance'
  | 'plus'
  | 'arrow-down'
  | 'arrow-left'
  | 'trash'
  | 'check';

function mapIcon(name: AllowedIcons): FeatherIcon | undefined {
  switch (name) {
    case 'box':
      return Box;
    case 'server':
      return Server;
    case 'code':
      return Code;
    case 'extensible':
      return Maximize2;
    case 'performance':
      return Cpu;
    case 'plus':
      return Plus;
    case 'arrow-down':
      return ChevronDown;
    case 'arrow-left':
      return ChevronLeft;
    case 'trash':
      return Trash2;
    case 'check':
      return Check;
  }
}

type iconProps = {
  name: AllowedIcons;
  iconColor?: string;
  size?: number;
  addedClass?: string;
  onclick: () => void;
};

export const Icon: React.FC<iconProps> = ({ name, iconColor, size, addedClass, onclick }) => {
  const InternalIcon = mapIcon(name);
  if (!InternalIcon) {
    return null;
  }
  return <InternalIcon size={size ? size : 48} color={iconColor} className={addedClass} onClick={onclick} />;
};
