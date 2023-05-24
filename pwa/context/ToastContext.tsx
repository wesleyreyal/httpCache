import React, { useContext, useState } from 'react';
import { AllowedVariant } from 'types';
import Popup, { AllowedVariantPopup } from 'components/common/popup';

type toastContextType = {
  text: string;
  variant: AllowedVariant;
};

const mapVariantToToastType = (variant: AllowedVariant): string => {
  switch (variant) {
    case 'danger':
      return 'error';
  }

  return variant;
};

const ToastContext = React.createContext<(toast: toastContextType) => void>(() => {
  return;
});

export const ToastProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [toastList, setToastList] = useState<ReadonlyArray<toastContextType>>([]);

  return (
    <ToastContext.Provider
      value={(toast) => {
        setToastList((prevToasts) => [...prevToasts, toast]);
        setTimeout(() => {
          setToastList((prevToasts) => [...prevToasts.slice(1)]);
        }, 3000);
      }}
    >
      <div className="absolute top-16 toast toast-top toast-end grid gap-4 z-40 w-96">
        {toastList.map((toast, idx) => (
          <Popup
            {...toast}
            variant={`alert-${mapVariantToToastType(toast.variant)}` as AllowedVariantPopup}
            key={idx}
          />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export const usePushToast = () => {
  return useContext(ToastContext);
};
