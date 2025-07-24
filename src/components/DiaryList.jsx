import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      // toSorted를 사용하는 이유 => sort 매소드는 어떠한 값도 반환하지 않고 원본 배열을 정렬하는 기능이다
      // toSorted는 원본 배열은 그대로 두고 새로운 배열을 반환한다.
      // 원본 배열을 수정하게 되면 문제가 생기기 때문에 toSorted를 사용한다.

      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedDate = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => {
            nav("/new");
          }}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortedDate.map((item) => (
          <DiaryItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
