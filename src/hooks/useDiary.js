import { useContext, useEffect, useState } from "react";
import { DiaryContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const navigate = useNavigate();
  const data = useContext(DiaryContext);
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      alert("존재하지 않는 일기입니다❌");
      navigate("/", { replace: true });
    }

    setCurrentItem(currentDiaryItem);
  }, [id, data]);

  return currentItem;
};

export default useDiary;
