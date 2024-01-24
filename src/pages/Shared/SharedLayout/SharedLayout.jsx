import MainContainer from 'components/MainContainer';
import { Outlet } from 'react-router';
import Header from '../../../components/Header';

import { GlobalStyles } from '../GlobalStyles.styled';

import { useSelector } from 'react-redux';
import { selectIsModalOpen } from '../../../redux/global/globalSlice';
import Loader from 'components/Loader';

const SharedLayout = () => {
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <>
      <GlobalStyles $isModalOpen={isModalOpen} />
      <MainContainer>
        <Header />

        <main>
          <Outlet fallback={<Loader />} />
        </main>
      </MainContainer>
    </>
  );
};

export default SharedLayout;
