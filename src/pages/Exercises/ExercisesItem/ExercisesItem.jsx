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
  WrapperNameExes,
  WrapperStart,
  IconWrapperStart,
  IndexesTextBody,
  IndexesTextTarget,
  IndexesValueBody,
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
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  const onClickStart = () => {
    setIsModalOpen(prevState => !prevState);
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
          <IconWrapper>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-human'
              }
            ></use>
          </IconWrapper>
          <NameExes>{name}</NameExes>
        </WrapperNameExes>
        <WrapperIndexes>
          <Indexes>
            <IndexesText>Burned calories:</IndexesText>
            <IndexesValue>{calories}</IndexesValue>
          </Indexes>
          <Indexes>
            <IndexesTextBody>Body part:</IndexesTextBody>
            <IndexesValueBody>{NameBodyPart}</IndexesValueBody>
          </Indexes>
          <Indexes>
            <IndexesTextTarget>Target:</IndexesTextTarget>
            <IndexesValueBody>{target}</IndexesValueBody>
          </Indexes>
        </WrapperIndexes>
      </WrapperExercisesItem>
      {isModalOpen && (
        <BasicModalWindow onClick={onClickStart}>
          <AddExerciseForm
            onClick={onClickStart}
            // exeId={exeId}
            exeId={_id}
            gifUrl={gifUrl}
            name={name}
            bodyPart={NameBodyPart}
            target={target}
            equipment={equipment}
            burnedCalories={burnedCalories}
            onClickToggle={handleToggleSuccessModal}
          />
        </BasicModalWindow>
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
