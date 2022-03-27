import { ReactElement } from 'react';
import { IHtmlProps } from '../../models/html-props';
import './button.scss';

export enum ButtonType {
  solid = 'btn__solid',
  border = 'btn__border',
}
export enum ButtonColor {
  primary = 'primary',
  google = 'google',
}

interface CustomButtonProps extends IHtmlProps {
  children: React.ReactNode;
  btnType: ButtonType;
  color: ButtonColor;
}

const CustomButton = ({
  children,
  btnType,
  color,
  ...props
}: CustomButtonProps): ReactElement => {
  return (
    <button className={`btn ${btnType} ${btnType}--${color}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
