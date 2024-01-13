import { useSelector, useDispatch } from 'react-redux';

import {
  setIsModalOpen,
  selectIsModalOpen,
} from '../../redux/global/globalSlice';

import Button from 'components/Button';
import BasicModalWindow from 'components/BasicModalWindow';
import AuthNav from 'components/AuthNav';

const Welcome = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  const handleModalOpen = () => {
    dispatch(setIsModalOpen(true));
  };

  return (
    <div>
      <h1>Transforming your body shape with Power Pulse</h1>
      <AuthNav />
      <Button onClick={handleModalOpen}>Open Modal</Button>

      {isModalOpen && <BasicModalWindow>Hello world</BasicModalWindow>}
    </div>
  );
};

export default Welcome;
