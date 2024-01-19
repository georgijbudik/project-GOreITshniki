import { TrackerCalories, TrackerVideo } from 'components/Tracker/Tracker';
import {
  ContainerStatisticsInfo,
  StyledMainImageWrapper,
} from './MainImage.styled';

const MainImage = () => {
  return (
    <>
      <StyledMainImageWrapper />
      <ContainerStatisticsInfo>
        <TrackerVideo />
        <TrackerCalories />
      </ContainerStatisticsInfo>
    </>
  );
};

export default MainImage;
