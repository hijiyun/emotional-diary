import styled from "styled-components";
import { EMOTION_BG_COLORS } from "../constants/EMOTION_BG_COLORS";

export const S = {
  DiaryItem: styled.div`
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgb(236, 236, 236);
  `,
  ImgSection: styled.div`
    min-width: 120px;
    height: 80px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;

    & img {
      width: 50%;
    }

    background-color: ${({ $emotionid }) => EMOTION_BG_COLORS[$emotionid]};
  `,
  InfoSection: styled.div`
    flex: 1;
    cursor: pointer;
  `,
  CreatedDate: styled.div`
    font-size: 25px;
    font-weight: bold;
  `,
  Content: styled.div`
    font-size: 18px;
  `,
  ButtonSection: styled.div`
    min-width: 70px;
  `,
};
