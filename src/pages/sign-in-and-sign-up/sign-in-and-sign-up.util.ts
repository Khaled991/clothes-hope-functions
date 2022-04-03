import { ISignIn, ISignUp } from './../../models/auth-forms';
import encrypt from 'sha1';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, createUserProfileDocument } from './../../utils/firebase.utils';
import { FirebaseError } from 'firebase/app';
import { t } from 'i18next';
import { showToastError, showToastSuccess } from './../../utils/toast.utils';

export const signIn = async (data: ISignIn) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, encrypt(data.password));
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error.message);
      if (error.message.toString().includes('auth/user-not-found'))
        showToastError(t('userNotFound'));
      else if (error.message.toString().includes('auth/wrong-password'))
        showToastError(t('wrongSignInData'));
      else if (error.message.toString().includes('auth/too-many-requests'))
        showToastError(t('accountTemporarilyDisabled'), 'long');
    }
  }
};

export const signUp = async (data: ISignUp) => {
  console.log(data);
  if (data.confirmPassword !== data.password)
    return showToastError(t('passwordDoesntMatch'));
  try {
    console.log(data.email, encrypt(data.password));
    const { user } = await createUserWithEmailAndPassword(
      auth,
      data.email,
      encrypt(data.password)
    );
    await createUserProfileDocument(user, { displayName: data.name });
    showToastSuccess(t('successfullyRegistered'));
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error(error.message);
      if (error.message.includes('auth/email-already-in-use'))
        showToastError(t('emailAlreadyInUse'));
    }
  }
};
