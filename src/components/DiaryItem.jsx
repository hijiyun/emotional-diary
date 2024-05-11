import getEmotionImage from "../util/get_emotion_image";
import Button from "./Button";
import { S } from "./DiaryItem.style";

const DiaryItem = () => {
  const emotionId = 5;
  return (
    <S.DiaryItem>
      <S.ImgSection $emotionid={emotionId}>
        <img src={getEmotionImage(5)} alt="감정 이모지" />
      </S.ImgSection>

      <S.InfoSection>
        <S.CreatedDate>{new Date().toLocaleDateString()}</S.CreatedDate>
        <S.Content>일기 컨텐츠</S.Content>
      </S.InfoSection>

      <S.ButtonSection>
        <Button>수정하기</Button>
      </S.ButtonSection>
    </S.DiaryItem>
  );
};

export default DiaryItem;
