import styled from "styled-components";

export const S = {
  Header: styled.nav`
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid rgb(226, 226, 226);

    & * {
      display: flex;
    }
  `,
  HeaderLeft: styled.div`
    width: 25%;
    justify-content: flex-start;
  `,
  HeaderCenter: styled.div`
    width: 50%;
    font-size: 25px;
    justify-content: center;
  `,
  HeaderRight: styled.div`
    width: 25%;
    justify-content: flex-end;
  `,
};
