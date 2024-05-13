import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  usePageTitle("새로운 일기 쓰는 중 ✨");

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    navigate("/", { replace: true });
  };

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
      <Editor onSubmit={onSubmit} />
    </>
  );
};

export default New;
