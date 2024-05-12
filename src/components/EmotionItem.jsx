import { S } from "./EmotionItem.style";
import getEmotionImage from "../util/get_emotion_image";

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <S.EmotionItem isSelected={isSelected} emotionId={emotionId}>
      <S.EmotionImg src={getEmotionImage(emotionId)} alt="감정 이모지" />
      <S.EmotionName>{emotionName}</S.EmotionName>
    </S.EmotionItem>
  );
};

export default EmotionItem;
