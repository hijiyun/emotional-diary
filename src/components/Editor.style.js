import styled, { css } from "styled-components";

const commonStyle = css`
  background-color: rgb(236, 236, 236);
  border: none;
  border-radius: 5px;
  font-size: 20px;
  padding: 10px 20px;
`;

export const S = {
  Editor: styled.section`
    & section {
      margin-bottom: 40px;
    }
  `,
  DateSection: styled.section``,
  EditorTitle: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  EditorInput: styled.input`
    ${commonStyle}
  `,
  EditorTextArea: styled.textarea`
    ${commonStyle}
    padding: 20px;
    width: 100%;
    min-height: 200px;
    resize: vertical;
    box-sizing: border-box;
  `,
  EmotionSection: styled.section``,
  ContentSection: styled.section``,
  ButtonSection: styled.section`
    display: flex;
    justify-content: space-between;
  `,
  EmotionListWrapper: styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2px;
  `,
};
