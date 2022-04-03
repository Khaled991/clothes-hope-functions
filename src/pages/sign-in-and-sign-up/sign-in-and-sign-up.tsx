import { ReactElement } from "react";
import "./sign-in-and-sign-up.scss";
import CustomForm from "../../components/custom-form/custom-form";
import { Row, Col } from "react-bootstrap";
import MainLayout from "../../layout/main-layout/main-layout";
import { t } from "i18next";
import { signIn, signUp } from "./sign-in-and-sign-up.util";

const SignInAndSignUpPage = (): ReactElement => {
  return (
    <MainLayout title="signIn">
      <Row>
        <Col md={6}>
          <CustomForm
            buttonText={t("signIn")}
            onSubmit={signIn}
            mainTitle="iAlreadyHaveAnAccount"
            description="signInWithYourEmailAndPassword"
            inputs={["email", "password"]}
            signInWithGoogle={true}
          />
        </Col>
        <Col md={6}>
          <CustomForm
            buttonText={t("signUp")}
            onSubmit={signUp}
            mainTitle="idoNotHaveAnAccount"
            description="signUpWithYourEmailAndPassword"
            inputs={["name", "email", "password", "confirmPassword"]}
          />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default SignInAndSignUpPage;
