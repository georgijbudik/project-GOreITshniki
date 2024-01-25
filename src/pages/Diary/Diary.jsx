import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/diary/diarySelectors';
import Loader from 'components/Loader';

import TitlePage from '../../components/TitlePage';
import DayDashboard from './DayDashboard';
import DaySwitch from './DaySwitch';
import DayProducts from './DayProducts';
import DayExercises from './DayExercises';
import {
  PageTitle,
  DaySwitchRight,
  Wrap,
  MediaWrapper,
  MediaWrapDayDashBoard,
} from './Diary.styled';

const Diary = () => {
  const { t } = useTranslation();
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Wrap>
        <PageTitle>
          <TitlePage>{t('diary.title')}</TitlePage>
          <DaySwitchRight>
            <DaySwitch />
          </DaySwitchRight>
        </PageTitle>
        <MediaWrapper>
          <MediaWrapDayDashBoard>
            <DayDashboard />
          </MediaWrapDayDashBoard>
          <div>
            <DayProducts />
            <DayExercises />
          </div>
        </MediaWrapper>
      </Wrap>
    </>
  );
};

export default Diary;
