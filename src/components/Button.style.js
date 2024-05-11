import styled from "styled-components";

const typeStyles = {
  POSITIVE: {
    backgroundColor: "rgb(100,201,100)",
    color: "white",
  },
  NEGATIVE: {
    backgroundColor: "rgb(253,86,95)",
    color: "white",
  },
};

export const S = {
  Button: styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    white-space: nowrap;
    background-color: ${({ type }) =>
      typeStyles[type]?.backgroundColor || "rgb(236, 236, 236)"};
    color: ${({ type }) => typeStyles[type]?.color || "black"};
    flex: ${({ size }) => (size === "long" ? 1 : null)};
  `,
};
