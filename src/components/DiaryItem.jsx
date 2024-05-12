import { useNavigate } from "react-router-dom";
import getEmotionImage from "../util/get_emotion_image";
import Button from "./Button";
import { S } from "./DiaryItem.style";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const navigate = useNavigate();
  return (
    <S.DiaryItem>
      <S.ImgSection
        $emotionid={emotionId}
        onClick={() => navigate(`/diary/${id}`)}
      >
        <img src={getEmotionImage(emotionId)} alt="감정 이모지" />
      </S.ImgSection>

      <S.InfoSection onClick={() => navigate(`/diary/${id}`)}>
        <S.CreatedDate>
          {new Date(createdDate).toLocaleDateString()}
        </S.CreatedDate>
        <S.Content>{content}</S.Content>
      </S.InfoSection>

      <S.ButtonSection>
        <Button onClick={() => navigate(`/edit/${id}`)}>수정하기</Button>
      </S.ButtonSection>
    </S.DiaryItem>
  );
};

export default DiaryItem;
