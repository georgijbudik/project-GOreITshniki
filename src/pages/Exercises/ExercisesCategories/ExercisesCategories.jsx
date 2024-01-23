import { useTranslation } from 'react-i18next';

import TitlePage from '../../../components/TitlePage';
import ChapterTemplate from '../ChapterTemplate';

import {
  ChaptersWrapper,
  LinkStyled,
  DesktopWrapper,
} from '../Exercises.styled';

const ExercisesCategories = () => {
  const { t } = useTranslation();

  return (
    <DesktopWrapper>
      <TitlePage>{t('exercises.navigation.title')}</TitlePage>
      <ChaptersWrapper>
        <li>
          <LinkStyled to="bodyparts">
            <ChapterTemplate>
              {t('exercises.navigation.bodyparts')}
            </ChapterTemplate>
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="muscles">
            <ChapterTemplate>
              {t('exercises.navigation.muscles')}
            </ChapterTemplate>
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="equipment">
            <ChapterTemplate>
              {t('exercises.navigation.equipment')}
            </ChapterTemplate>
          </LinkStyled>
        </li>
      </ChaptersWrapper>
    </DesktopWrapper>
  );
};

export default ExercisesCategories;
