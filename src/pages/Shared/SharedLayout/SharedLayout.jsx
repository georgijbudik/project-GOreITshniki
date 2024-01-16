import MainContainer from 'components/MainContainer';
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
        <Header />

        <main>
          <Outlet />
        </main>
      </MainContainer>
    </>
  );
};

export default SharedLayout;
