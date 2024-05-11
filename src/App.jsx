import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button>left</Button>}
        rightChild={<Button>right</Button>}
      />

      <Button
        type={"POSITIVE"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      >
        버튼
      </Button>
      <Button
        type={"NEGATIVE"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      >
        버튼
      </Button>
      <Button
        onClick={() => {
          console.log("버튼 클릭");
        }}
      >
        버튼
      </Button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
