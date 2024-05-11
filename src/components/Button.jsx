import { S } from "./Button.style";

const Button = ({ children, type, onClick, ...props }) => {
  return (
    <>
      <S.Button type={type} onClick={onClick} {...props}>
        {children}
      </S.Button>
    </>
  );
};

export default Button;
