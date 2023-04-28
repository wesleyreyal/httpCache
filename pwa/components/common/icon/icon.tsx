import React from "react";
import {Box, Code, Cpu, Icon as FeatherIcon, Maximize2, Plus, Server} from "react-feather";

type AllowedIcons = 'box'|'server'|'code'|'extensible'|'performance'|'plus' ;

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
  }
}

type iconProps = {
  name: AllowedIcons;
}

export const Icon: React.FC<iconProps> = ({name}) => {
  const InternalIcon = mapIcon(name);
  if (!InternalIcon) {
    return null;
  }
  return <InternalIcon size={48} color={'#3DA9FC'}/>;
};
