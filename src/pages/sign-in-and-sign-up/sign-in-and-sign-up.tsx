import { ReactElement } from 'react';
import './sign-in-and-sign-up.scss';
import CustomForm from '../../components/custom-form/custom-form';
import { Row, Col } from 'react-bootstrap';
import MainLayout from '../../layout/main-layout/main-layout';
//TODO
// import { signInWithGoogle } from "./../../firebase/firebase.utils";

const SignInAndSignUpPage = (): ReactElement => (
  <MainLayout title="signIn">
    <Row>
      <Col md={6}>
        {/* sign in */}
        <CustomForm
          mainTitle="iAlreadyHaveAnAccount"
          description="signInWithYourEmailAndPassword"
          inputs={['email', 'password']}
          buttonText="signIn"
          // type="submit"
          signInWithGoogle={true}
        />
      </Col>
      <Col md={6}>
        {/* sign up */}
        <CustomForm
          mainTitle="idoNotHaveAnAccount"
          description="signUpWithYourEmailAndPassword"
          inputs={['name', 'email', 'password', 'confirmPassword']}
          buttonText="signUp"
        />
      </Col>
    </Row>
  </MainLayout>
);

export default SignInAndSignUpPage;
