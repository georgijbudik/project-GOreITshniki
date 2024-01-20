import {
  ContainerItem,
  Img,
  TextItem,
  NameImg,
  NameCategory,
  ContHover,
} from './ExercisesSubcategoriesItem.styled';

const ExercisesSubcategoriesItem = ({ fig, nameImg, category }) => {
  return (
    <ContainerItem>
      <ContHover>
        <Img src={fig} />
        <TextItem>
          <NameImg>{nameImg}</NameImg>
          <NameCategory>{category}</NameCategory>
        </TextItem>
      </ContHover>
    </ContainerItem>
  );
};

export default ExercisesSubcategoriesItem;
