import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/diary/diaryOperations';
import {
  selectDiaryProducts,
  selectDiaryDate,
} from '../../../redux/diary/diarySelectors';
import { useNavigate } from 'react-router-dom';

import {
  Wrapper,
  CellProductsHeader,
  NotFoundMessage,
  ProdWrap,
  TopProdBlock,
  BottomProdBlock,
  TitleText,
  TitleTextTablet1,
  TitleTextTablet2,
  TitleTextTablet3,
  TitleTextTablet4,
  TitleTextTablet5,
  TableHeaderTablet,
  MainText,
  MainTextTablet,
  MainTextTablett,
  MainTextBottom,
  ButtonWrap,
  LiWrap,
  RecommemdedTextBottom,
  CardTitle,
} from './DayProducts.styled';
import { selectUserBlood } from '../../../redux/auth/authSelectors';

const DayProducts = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const products = useSelector(selectDiaryProducts);
  const bloodType = useSelector(selectUserBlood);

  const date = useSelector(selectDiaryDate);

  // const dayInfo = useSelector(selectDayInfo);
  // console.log(dayInfo);
  const navigate = useNavigate();
  const handleProductDelete = data => {
    console.log(data);
    dispatch(deleteProduct(data));
  };

  return (
    <Wrapper $noexercises={products.length > 0}>
      <CellProductsHeader>
        <CardTitle>{t('diary.products.header')}</CardTitle>
        <div>
          <button
            onClick={() => {
              navigate('/products');
            }}
          >
            {t('diary.products.add')}
          </button>
          <svg>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-arrow_OMG'
              }
            />
          </svg>
        </div>
      </CellProductsHeader>
      {products.length > 0 ? (
        <TableHeaderTablet>
          <li>
            <TitleTextTablet1>{t('diary.products.title')}</TitleTextTablet1>
          </li>
          <li>
            <TitleTextTablet2>{t('diary.products.category')}</TitleTextTablet2>
          </li>
          <li>
            <TitleTextTablet3>{t('diary.products.calories')}</TitleTextTablet3>
          </li>
          <li>
            <TitleTextTablet4>{t('diary.products.weight')}</TitleTextTablet4>
          </li>
          <li>
            <TitleTextTablet5>
              {t('diary.products.recommended')}
            </TitleTextTablet5>
          </li>
        </TableHeaderTablet>
      ) : (
        <div></div>
      )}
      {products.length === 0 ? (
        <NotFoundMessage>{t('diary.products.not_found')}</NotFoundMessage>
      ) : (
        <ul>
          {products.map(({ product, consumedCalories, weight }) => {
            const recommendation =
              product.groupBloodNotAllowed[bloodType] === true ? 'No' : 'Yes';
            return (
              <LiWrap>
                <ProdWrap>
                  <TopProdBlock>
                    <div>
                      <TitleText>{t('diary.products.title')}</TitleText>
                      <MainText>{product.title}</MainText>
                      <MainTextTablet>{product.title}</MainTextTablet>
                    </div>
                    <div>
                      <TitleText>{t('diary.products.category')}</TitleText>
                      <MainText> {product.category}</MainText>
                      <MainTextTablett>{product.category}</MainTextTablett>
                    </div>
                  </TopProdBlock>
                  <BottomProdBlock>
                    <div>
                      <TitleText>{t('diary.products.calories')}</TitleText>
                      <MainTextBottom>{consumedCalories}</MainTextBottom>
                    </div>
                    <div>
                      <TitleText>{t('diary.products.weight')}</TitleText>
                      <MainTextBottom>{weight}</MainTextBottom>
                    </div>
                    <div>
                      <TitleText>{t('diary.products.recommended')}</TitleText>
                      <RecommemdedTextBottom $recommended={recommendation}>
                        {recommendation}
                      </RecommemdedTextBottom>
                    </div>
                    <ButtonWrap>
                      <button
                        onClick={() => {
                          const data = { id: product._id, date };
                          handleProductDelete(data);
                        }}
                      >
                        <svg>
                          <use
                            xlinkHref={
                              process.env.PUBLIC_URL +
                              '/images/sprite/sprite.svg#icon-trash-03_OMG'
                            }
                          />
                        </svg>
                      </button>
                    </ButtonWrap>
                  </BottomProdBlock>
                </ProdWrap>
              </LiWrap>
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
};

export default DayProducts;
