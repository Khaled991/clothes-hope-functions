import { ReactElement } from 'react';
import './custom-input.scss';

const CustomInput = ({ ...props }): ReactElement => {
  return <input className="custome-input" required {...props} />;
};

export const Textarea = ({ ...props }): ReactElement => {
  return <textarea className="custome-input" required rows={5} {...props} />;
};

export default CustomInput;
