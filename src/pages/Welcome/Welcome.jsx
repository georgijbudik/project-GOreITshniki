import { useSelector, useDispatch } from 'react-redux';

import {
  setIsModalOpen,
  selectIsModalOpen,
} from '../../redux/global/globalSlice';

import Button from 'components/Button';
import BasicModalWindow from 'components/BasicModalWindow';

const Welcome = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  const handleModalOpen = () => {
    dispatch(setIsModalOpen(true));
  };

  return (
    <div>
      <Button onClick={handleModalOpen}>Open Modal</Button>

      {isModalOpen && <BasicModalWindow>Hello world</BasicModalWindow>}
    </div>
  );
};

export default Welcome;
