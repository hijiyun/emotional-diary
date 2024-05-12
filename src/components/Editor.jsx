import Button from "./Button";
import { S } from "./Editor.style";
import EmotionItem from "./EmotionItem";

const EMOTION_LIST = [
  {
    emotionId: 1,
    emotionName: "완전 좋아",
  },
  {
    emotionId: 2,
    emotionName: "조금 좋아",
  },
  {
    emotionId: 3,
    emotionName: "보통이야",
  },
  {
    emotionId: 4,
    emotionName: "조금 별로",
  },
  {
    emotionId: 5,
    emotionName: "완전 별로",
  },
];

const Editor = () => {
  const EMOTION_ID = 5;
  return (
    <S.Editor>
      <S.DateSection>
        <S.EditorTitle>오늘의 날짜</S.EditorTitle>
        <S.EditorInput type="date" />
      </S.DateSection>
      <S.EmotionSection>
        <S.EditorTitle>오늘의 감정</S.EditorTitle>
        <S.EmotionListWrapper>
          {EMOTION_LIST.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === EMOTION_ID}
            />
          ))}
        </S.EmotionListWrapper>
      </S.EmotionSection>
      <S.ContentSection>
        <S.EditorTitle>오늘의 일기</S.EditorTitle>
        <S.EditorTextArea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="오늘은 어땠나요?"
        ></S.EditorTextArea>
      </S.ContentSection>
      <S.ButtonSection>
        <Button>취소하기</Button>
        <Button type={"POSITIVE"}>작성완료</Button>
      </S.ButtonSection>
    </S.Editor>
  );
};

export default Editor;
