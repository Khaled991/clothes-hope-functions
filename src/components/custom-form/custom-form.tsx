import { useState, ReactElement } from "react";
import "./custom-form.scss";
import FromInput from "../form-input/form-input";
import CustomButton, { ButtonColor, ButtonType } from "../button/button";
import { t } from "i18next";

// import { createUserProfileDocument, auth } from '../../firebase/firebase.utils';
// import encrypt from 'sha1';
import { signInWithGoogle } from "./../../utils/firebase.utils";

interface ICustomFormProps {
  mainTitle: string;
  description: string;
  inputs: any;
  buttonText: string;
  signInWithGoogle?: boolean;
  onSubmit: (data: any) => void;
}

const CustomForm = ({
  mainTitle,
  description,
  inputs,
  buttonText,
  signInWithGoogle: isSignInWithGoogleShown,
  onSubmit,
}: ICustomFormProps): ReactElement => {
  const obj: any = {};
  for (let i = 0; i < inputs.length; i++) {
    obj[inputs[i]] = "";
  }

  const [data, setData] = useState(obj);

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [name]: value });
  };

  return (
    <div className="form">
      <span className="form__title">{t(mainTitle)}</span>
      <span className="form__description">{t(description)}</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(data);
        }}
      >
        {inputs.map((label: string) => (
          <FromInput
            key={label}
            name={label}
            type={
              !label.toLowerCase().includes("password") ? label : "password"
            }
            value={data[label]}
            handleChange={handleChange}
            label={label}
            required
          />
        ))}
        <div className="buttons-div">
          <CustomButton
            btnType={ButtonType.solid}
            color={ButtonColor.primary}
            type="submit"
            value="Submit Form"
          >
            {buttonText}
          </CustomButton>

          {isSignInWithGoogleShown && (
            <CustomButton
              btnType={ButtonType.solid}
              color={ButtonColor.google}
              type="button"
              value="Submit Form"
              onClick={signInWithGoogle}
            >
              {t("signInWithGoogle")}
            </CustomButton>
          )}
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
