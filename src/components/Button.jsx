import { S } from "./Button.style";

const Button = ({ children, type, onClick }) => {
  return (
    <div>
      <S.Button type={type} onClick={onClick}>
        {children}
      </S.Button>
    </div>
  );
};

export default Button;
