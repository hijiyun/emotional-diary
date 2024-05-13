import { EMOTION_LIST } from "../constants/EMOTION_LIST";
import getEmotionImage from "../util/get_emotion_image";
import { S } from "./Viewer.style";

const Viewer = ({ content, emotionId }) => {
  const emotionItem = EMOTION_LIST.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <S.Viewer>
      <S.ImgSection>
        <S.Title>오늘의 감정</S.Title>
        <S.EmotionImgWrapper emotionId={emotionId}>
          <img src={getEmotionImage(emotionId)} alt="" />
          <div>{emotionItem.emotionName}</div>
        </S.EmotionImgWrapper>
      </S.ImgSection>
      <S.ContentSection>
        <S.Title>오늘의 일기</S.Title>
        <S.ContentWrapper>
          <p>{content}</p>
        </S.ContentWrapper>
      </S.ContentSection>
    </S.Viewer>
  );
};

export default Viewer;
