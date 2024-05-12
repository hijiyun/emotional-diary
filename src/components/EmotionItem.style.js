import styled from "styled-components";
import { EMOTION_BG_COLORS } from "../constants/EMOTION_BG_COLORS";

export const S = {
  EmotionItem: styled.div`
    background-color: rgb(236, 236, 236);
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    background-color: ${(props) =>
      props.isSelected && EMOTION_BG_COLORS[props.emotionId]};
    color: ${({ isSelected }) => isSelected && "white"};
  `,
  EmotionImg: styled.img`
    width: 50%;
    margin-bottom: 10px;
  `,
  EmotionName: styled.div``,
};
