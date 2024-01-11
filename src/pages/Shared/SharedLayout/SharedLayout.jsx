import Header from 'components/Header';
import MainContainer from 'components/MainContainer';
import UserNav from '../../../components/UserNav';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header>
        <UserNav></UserNav>
      </Header>
      <main>
        <Outlet />
      </main>
    </MainContainer>
  );
};

export default SharedLayout;
