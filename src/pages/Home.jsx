import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 5월"}
        leftChild={<Button>&lt;</Button>}
        rightChild={<Button>&gt;</Button>}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
