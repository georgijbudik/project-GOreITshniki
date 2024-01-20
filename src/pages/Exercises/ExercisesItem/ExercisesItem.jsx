import { useState } from 'react';
import {
  Indexes,
  IndexesText,
  IndexesValue,
  WrapperIndexes,
  HeaderIndexes,
  TextStart,
  NameExes,
  WrapperExercisesItem,
  IconWrapper,
  WrapperIcon,
  WrapperNameExes,
  WrapperStart,
  IconWrapperStart,
  ExercisesTitle,
} from './ExercisesItem.styled';
import AddExerciseForm from '../AddExerciseForm';
import BasicModalWindow from '../../../components/BasicModalWindow';

import AddExerciseSuccess from '../AddExerciseSuccess';

const ExercisesItem = ({
  calories,
  target,
  NameBodyPart,
  name,
  _id,
  equipment,
  burnedCalories,
  gifUrl,
  time,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  const onClickStart = () => {
    setIsModalOpen(true);
  };
  const onClickEnd = () => {
    setIsModalOpen(false);
  };

  const handleToggleSuccessModal = () => {
    setShowModalSuccess(prevState => !prevState);
  };

  return (
    <>
      <WrapperExercisesItem>
        <HeaderIndexes>
          <ExercisesTitle>WORKOUT</ExercisesTitle>
          <WrapperStart onClick={onClickStart}>
            <TextStart>Start</TextStart>
            <IconWrapperStart>
              <use
                xlinkHref={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-arrow'
                }
              ></use>{' '}
            </IconWrapperStart>
          </WrapperStart>
        </HeaderIndexes>
        <WrapperNameExes>
          <WrapperIcon>
            <IconWrapper>
              <use
                xlinkHref={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-human'
                }
              ></use>
            </IconWrapper>
          </WrapperIcon>
          <NameExes>{name}</NameExes>
        </WrapperNameExes>
        <WrapperIndexes>
          <Indexes>
            <IndexesText>Burned calories:</IndexesText>
            <IndexesValue>{calories}</IndexesValue>
          </Indexes>
          <Indexes>
            <IndexesText>Body part:</IndexesText>
            <IndexesValue>{NameBodyPart}</IndexesValue>
          </Indexes>
          <Indexes>
            <IndexesText>Target:</IndexesText>
            <IndexesValue>{target}</IndexesValue>
          </Indexes>
        </WrapperIndexes>
      </WrapperExercisesItem>
      {isModalOpen && (
        <AddExerciseForm
          onClose={onClickEnd}
          exeId={_id}
          gifUrl={gifUrl}
          name={name}
          bodyPart={NameBodyPart}
          target={target}
          equipment={equipment}
          burnedCalories={burnedCalories}
          time={time}
          onClickToggle={handleToggleSuccessModal}
        />
      )}
      {showModalSuccess && (
        <BasicModalWindow onClick={handleToggleSuccessModal}>
          <AddExerciseSuccess onClick={handleToggleSuccessModal} />
        </BasicModalWindow>
      )}
    </>
  );
};

export default ExercisesItem;
