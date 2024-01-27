import Button from 'components/Button';
import BasicModalWindow from 'components/BasicModalWindow';

import {
  StyledDeleteModalButtonContainer,
  StyledDeleteModalWrapper,
  StyledDeleteModalTitle,
} from './DeleteModal.styled';

const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <BasicModalWindow onClose={onClose}>
      <StyledDeleteModalWrapper>
        <StyledDeleteModalTitle>Are you sure?</StyledDeleteModalTitle>
        <StyledDeleteModalButtonContainer>
          <Button
            onClick={() => {
              onDelete();
              onClose();
            }}
          >
            Delete
          </Button>
          <Button secondary onClick={onClose}>
            Cancel
          </Button>
        </StyledDeleteModalButtonContainer>
      </StyledDeleteModalWrapper>
    </BasicModalWindow>
  );
};

export default DeleteModal;
