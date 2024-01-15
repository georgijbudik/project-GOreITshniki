import TitlePage from '../../../components/TitlePage';
import ChapterTemplate from '../ChapterTemplate';

import {
  ChaptersWrapper,
  LinkStyled,
  DesktopWrapper,
} from '../Exercises.styled';

const ExercisesCategories = () => {
  return (
    <DesktopWrapper>
      <TitlePage>Exercises</TitlePage>
      <ChaptersWrapper>
        <li>
          <LinkStyled to="bodyparts">
            <ChapterTemplate>Body parts</ChapterTemplate>
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="muscles">
            <ChapterTemplate>Muscles</ChapterTemplate>
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="equipment">
            <ChapterTemplate>Equipment</ChapterTemplate>
          </LinkStyled>
        </li>
      </ChaptersWrapper>
    </DesktopWrapper>
  );
};

export default ExercisesCategories;
