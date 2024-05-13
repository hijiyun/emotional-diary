import { useContext, useState } from "react";
import { DiaryContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";

const getMonthlyData = (pivotData, data) => {
  const beginTime = new Date(
    pivotData.getFullYear(),
    pivotData.getMonth(),
    1,
    0,
    0,
    0
  );
  const endTime = new Date(
    pivotData.getFullYear(),
    pivotData.getMonth() + 1,
    0,
    23,
    59,
    59
  );

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const [pivotData, setPvotDate] = useState(new Date());
  const data = useContext(DiaryContext);
  usePageTitle("감정 일기장 ✨");

  const monthlyData = getMonthlyData(pivotData, data);

  const onIncreaseMonth = () => {
    setPvotDate(new Date(pivotData.getFullYear(), pivotData.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPvotDate(new Date(pivotData.getFullYear(), pivotData.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotData.getFullYear()}년 ${pivotData.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth}>&lt;</Button>}
        rightChild={<Button onClick={onIncreaseMonth}>&gt;</Button>}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
