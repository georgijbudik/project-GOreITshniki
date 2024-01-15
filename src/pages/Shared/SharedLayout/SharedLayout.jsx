import MainContainer from 'components/MainContainer';
import UserNav from '../../../components/UserNav';
import { Outlet } from 'react-router';
import { Header } from 'components/Header/Header';

import { GlobalStyles } from '../GlobalStyles.styled';

import { useSelector } from 'react-redux';
import { selectIsModalOpen } from '../../../redux/global/globalSlice';

const SharedLayout = () => {
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <>
      <GlobalStyles $isModalOpen={isModalOpen} />
      <MainContainer>
        <Header>
          <UserNav></UserNav>
        </Header>
        <main>
          <Outlet />
        </main>
      </MainContainer>
    </>
  );
};

export default SharedLayout;
