import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { S } from "./DiaryList.style";

const DiaryList = () => {
  return (
    <S.DiaryList>
      <S.MenuBar>
        <select>
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>
        <Button type={"POSITIVE"} size="long">
          새로운 일기 쓰기
        </Button>
      </S.MenuBar>
      <S.ListWrapper>
        <DiaryItem />
      </S.ListWrapper>
    </S.DiaryList>
  );
};

export default DiaryList;
