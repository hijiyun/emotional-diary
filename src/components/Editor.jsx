import { useEffect, useState } from "react";
import Button from "./Button";
import { S } from "./Editor.style";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";
import { EMOTION_LIST } from "../constants/EMOTION_LIST";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ onSubmit, initData }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: "",
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <S.Editor>
      <S.DateSection>
        <S.EditorTitle>오늘의 날짜</S.EditorTitle>
        <S.EditorInput
          onChange={onChangeInput}
          name="createdDate"
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </S.DateSection>
      <S.EmotionSection>
        <S.EditorTitle>오늘의 감정</S.EditorTitle>
        <S.EmotionListWrapper>
          {EMOTION_LIST.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </S.EmotionListWrapper>
      </S.EmotionSection>
      <S.ContentSection>
        <S.EditorTitle>오늘의 일기</S.EditorTitle>
        <S.EditorTextArea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          cols="30"
          rows="10"
          placeholder="오늘은 어땠나요?"
        ></S.EditorTextArea>
      </S.ContentSection>
      <S.ButtonSection>
        <Button onClick={() => navigate(-1)}>취소하기</Button>
        <Button onClick={onClickSubmitButton} type={"POSITIVE"}>
          작성완료
        </Button>
      </S.ButtonSection>
    </S.Editor>
  );
};

export default Editor;
