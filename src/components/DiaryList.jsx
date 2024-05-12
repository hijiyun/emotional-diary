import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { S } from "./DiaryList.style";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  console.log(sortType);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      console.log("a:", a, "b:", b);
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedDate();

  return (
    <S.DiaryList>
      <S.MenuBar>
        <select onChange={onChangeSortType}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>
        <Button type={"POSITIVE"} size="long" onClick={() => navigate(`/new`)}>
          새로운 일기 쓰기
        </Button>
      </S.MenuBar>
      <S.ListWrapper>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </S.ListWrapper>
    </S.DiaryList>
  );
};

export default DiaryList;
