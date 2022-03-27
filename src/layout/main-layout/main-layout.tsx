import { t } from 'i18next';
import { ReactElement } from 'react';
import './main-layout.scss';
import { Container } from 'react-bootstrap';

interface IMainLayout {
  title: string;
  children: any;
}
const MainLayout = ({ title, children }: IMainLayout): ReactElement => {
  return (
    <div className="main-layout">
      <div className="main-layout__header">
        <span className="main-layout__header__title">{t(title)}</span>
      </div>
      <Container>{children}</Container>
    </div>
  );
};

export default MainLayout;
