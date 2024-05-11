import { S } from "./Header.style";
const Header = ({ title, leftChild, rightChild }) => {
  return (
    <S.Header>
      <S.HeaderLeft>{leftChild}</S.HeaderLeft>
      <S.HeaderCenter>{title}</S.HeaderCenter>
      <S.HeaderRight>{rightChild}</S.HeaderRight>
    </S.Header>
  );
};

export default Header;
