import React from "react";
import {
  Box,
  ChevronDown,
  ChevronLeft,
  Code,
  Cpu,
  Icon as FeatherIcon,
  Maximize2,
  Plus,
  Server,
  Trash2
} from "react-feather";

type AllowedIcons = 'box'|'server'|'code'|'extensible'|'performance'|'plus'|'arrow-down'|'arrow-left'|'trash' ;

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
      return Cpu
    case 'plus':
      return Plus;
    case 'arrow-down':
      return ChevronDown
    case 'arrow-left':
      return ChevronLeft
    case 'trash':
      return Trash2
  }
}

type iconProps = {
  name: AllowedIcons;
  iconColor?: string;
  size?: number;
  addedClass?: string;
}

export const Icon: React.FC<iconProps> = ({name, iconColor, size, addedClass}) => {
  const InternalIcon = mapIcon(name);
  if (!InternalIcon) {
    return null;
  }
  return <InternalIcon size={size != undefined ? size : 48} color={iconColor} className={addedClass} />;
};