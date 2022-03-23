import { ReactElement } from 'react';
import './button.scss';

export enum ButtonType {
  solid = 'solid-btn',
  borderButton = 'border-btn',
}

interface CustomButtonProps {
  children: React.ReactNode;
  type: ButtonType;
  onClick?: () => void;
}

const CustomButton = ({
  children,
  type,
  onClick,
  ...props
}: CustomButtonProps): ReactElement => {
  return (
    <button onClick={onClick} className={`btn ${type}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
