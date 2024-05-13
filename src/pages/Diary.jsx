import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/DiaryViewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const navigate = useNavigate();
  const params = useParams();
  const currentItem = useDiary(params.id);
  usePageTitle("나의 일기 ✨");

  if (!currentItem) {
    return <div>데이터 로딩중 ..!</div>;
  }

  const { content, createdDate, emotionId } = currentItem;
  const date = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${date} 기록`}
        leftChild={<Button onClick={() => navigate(-1)}>&lt; 뒤로가기</Button>}
        rightChild={
          <Button onClick={() => navigate(`/edit/${params.id}`)}>
            수정하기
          </Button>
        }
      />
      <Viewer content={content} emotionId={emotionId} />
    </div>
  );
};

export default Diary;
