import { useState, ReactElement } from 'react';
import './custom-form.scss';
import FromInput from '../form-input/form-input';
import CustomButton, { ButtonColor, ButtonType } from '../button/button';
import { t } from 'i18next';

// import { createUserProfileDocument, auth } from '../../firebase/firebase.utils';
// import encrypt from 'sha1';

interface ICustomFormProps {
  mainTitle: string;
  description: string;
  inputs: any;
  buttonText: string;
  signInWithGoogle?: boolean;
}

const CustomForm = ({
  mainTitle,
  description,
  inputs,
  buttonText,
  signInWithGoogle,
}: // signInWithGoogle,
ICustomFormProps): ReactElement => {
  const obj: any = {};
  for (let i = 0; i < inputs.length; i++) {
    obj[inputs[i]] = '';
  }

  const [data, setData] = useState(obj);

  const signUp = async () => {
    if (data['Confirm password'] !== data['Password'])
      return alert(`Passwords didn't match`);
    try {
      // console.log(data["Email"], encrypt(data["Password"]));
      // const { user } = await auth.createUserWithEmailAndPassword(
      //   data['Email'],
      //   encrypt(data['Password'])
      // );

      // createUserProfileDocument(user, { displayName: data['Display name'] });
      setData(obj); //empty the data
    } catch (error) {
      console.error('error');
    }
  };

  const signIn = async () => {
    try {
      // const { Email, Password } = data;
      // await auth.signInWithEmailAndPassword(Email, encrypt(Password));
      setData(obj);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //if in register form
    if (buttonText === 'SIGN UP') {
      signUp();
    } else {
      signIn();
    }
  };

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [name]: value });
  };

  return (
    <div className="form">
      <span className="form__title">{t(mainTitle)}</span>
      <span className="form__description">{t(description)}</span>
      <form onSubmit={handleSubmit}>
        {inputs.map((label: string) => (
          <FromInput
            key={label}
            name={label}
            type={!label.includes('password') ? label : 'password'}
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
            {t(buttonText)}
          </CustomButton>

          {signInWithGoogle ? (
            <CustomButton
              btnType={ButtonType.solid}
              color={ButtonColor.google}
              type="button"
              value="Submit Form"
              // onClick={signInWithGoogle}
              // signInWithGoogle
            >
              {t('signInWithGoogle')}
            </CustomButton>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
