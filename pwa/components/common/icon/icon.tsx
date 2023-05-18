import React from 'react';
import { X } from 'react-feather';
import {
  AlertOctagon,
  Box,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Code,
  Cpu,
  Icon as FeatherIcon,
  MapPin,
  Maximize2,
  Plus,
  Server,
  Trash2,
} from 'react-feather';

export type AllowedIcons =
  | 'alert'
  | 'box'
  | 'server'
  | 'code'
  | 'code'
  | 'chevron-down'
  | 'chevron-up'
  | 'extensible'
  | 'performance'
  | 'plus'
  | 'arrow-down'
  | 'arrow-left'
  | 'trash'
  | 'check'
  | 'pin'
  | 'x';

function mapIcon(name: AllowedIcons): FeatherIcon | undefined {
  switch (name) {
    case 'box':
      return Box;
    case 'server':
      return Server;
    case 'code':
      return Code;
    case 'chevron-down':
      return ChevronDown;
    case 'chevron-up':
      return ChevronUp;
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
    case 'pin':
      return MapPin;
    case 'alert':
      return AlertOctagon;
    case 'x':
      return X;
  }
}

type iconProps = {
  name: AllowedIcons;
  iconColor?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
};

export const Icon: React.FC<iconProps> = ({ name, iconColor, size, ...props }) => {
  const InternalIcon = mapIcon(name);
  if (!InternalIcon) {
    return null;
  }
  return <InternalIcon size={size ? size : 48} color={iconColor} {...props} />;
};
