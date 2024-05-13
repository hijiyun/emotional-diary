import styled, { css } from "styled-components";
import { EMOTION_BG_COLORS } from "../constants/EMOTION_BG_COLORS";

const commonSection = css`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const S = {
  Viewer: styled.div``,
  Title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  ImgSection: styled.section`
    ${commonSection}
  `,
  EmotionImgWrapper: styled.div`
    background-color: ${({ emotionId }) => EMOTION_BG_COLORS[emotionId]};
    width: 250px;
    height: 250px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-size: 22px;
  `,
  ContentSection: styled.section`
    ${commonSection}
  `,
  ContentWrapper: styled.div`
    width: 100%;
    background-color: rgb(236, 236, 236);
    border-radius: 5px;

    word-break: keep-all;
    overflow-wrap: break-word;

    & p {
      padding: 20px;
      text-align: left;
      font-size: 20px;
      font-weight: 400;
      line-height: 2.5;
    }
  `,
};
