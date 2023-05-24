//import { AllowedIcons} from 'components/common/icon';
import React from 'react';

export type AllowedVariantPopup = 'alert-success' | 'alert-error' | 'alert-ghost' | 'alert-info' | 'alert-warning';

type popupProps = {
  text: string;
  variant: AllowedVariantPopup;
};

export const Popup: React.FC<popupProps> = ({ text, variant }) => (
  <div className={`alert ${variant}`}>
    <span>{text}</span>
  </div>
);

export default Popup;
