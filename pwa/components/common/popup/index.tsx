//import { AllowedIcons} from 'components/common/icon';
import React from 'react';

type AllowedVariantPopup = 'alert-success' | 'alert-danger' | 'alert-ghost' | 'alert-info' | 'alert-warning';

type popupProps = {
  text: string;
  variant: AllowedVariantPopup;
};

export const Popup: React.FC<popupProps> = ({ text, variant }) => (
  <div className={`alert ${variant}`}>
    <div>
      <span>{text}</span>
    </div>
  </div>
);

export default Popup;
