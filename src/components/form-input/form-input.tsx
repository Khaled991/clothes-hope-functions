import { IHtmlProps } from '../../models/html-props';
import './form-input.scss';
import i18n from './../../i18next';
import { t } from 'i18next';

interface IFromInputProps extends IHtmlProps {
  handleChange: any;
  label: string;
}

const FromInput = ({ handleChange, label, ...otherProps }: IFromInputProps) => {
  const directionKey = i18n.language === 'ar-EG' ? 'right' : 'left';
  // console.log(i18n.language);
  return (
    <div className="group">
      <input onChange={handleChange} className="form-input" {...otherProps} />
      {label && (
        <label
          style={{ [directionKey]: '0.8rem' }}
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {t(label)}
        </label>
      )}
    </div>
  );
};

export default FromInput;
