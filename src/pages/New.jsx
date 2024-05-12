import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        title="새로운 일기 쓰기"
        leftChild={
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            &lt; 뒤로 가기
          </Button>
        }
      />
      <Editor />
    </>
  );
};

export default New;
