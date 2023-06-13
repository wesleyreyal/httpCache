import React from 'react';
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
  Lock,
  GitHub,
  Save,
  X,
} from 'react-feather';

export type AllowedIcons =
  | 'alert'
  | 'arrow-down'
  | 'arrow-left'
  | 'box'
  | 'check'
  | 'chevron-down'
  | 'chevron-up'
  | 'code'
  | 'extensible'
  | 'performance'
  | 'pin'
  | 'plus'
  | 'save'
  | 'server'
  | 'trash'
  | 'x'
  | 'lock'
  | 'github';

function mapIcon(name: AllowedIcons): FeatherIcon | undefined {
  switch (name) {
    case 'alert':
      return AlertOctagon;
    case 'arrow-down':
      return ChevronDown;
    case 'arrow-left':
      return ChevronLeft;
    case 'box':
      return Box;
    case 'check':
      return Check;
    case 'chevron-down':
      return ChevronDown;
    case 'chevron-up':
      return ChevronUp;
    case 'code':
      return Code;
    case 'extensible':
      return Maximize2;
    case 'performance':
      return Cpu;
    case 'pin':
      return MapPin;
    case 'plus':
      return Plus;
    case 'save':
      return Save;
    case 'server':
      return Server;
    case 'trash':
      return Trash2;
    case 'x':
      return X;
    case 'lock':
      return Lock;
    case 'github':
      return GitHub;
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
