import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const currentItem = useDiary(params.id);
  usePageTitle("일기 수정 중 ✨");

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제하나요❓ 다시 복구되지 않아요‼️")) {
      onDelete(params.id);
      navigate("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (confirm("일기를 정말 수정할까요? ✨")) {
      onUpdate(
        input.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      navigate("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => navigate(-1)}>&lt; 뒤로가기</Button>}
        rightChild={
          <Button onClick={onClickDelete} type={"NEGATIVE"}>
            삭제하기
          </Button>
        }
      />
      <Editor onSubmit={onSubmit} initData={currentItem} />
    </div>
  );
};

export default Edit;
