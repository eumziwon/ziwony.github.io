import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useNavigate } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={"yyyy-mm-dd 기록"}
        leftChild={
          <Button
            onClick={() => nav(-1)}
            text={"< 뒤로가기"}
          />
        }
        rightChild={<Button text={"수정하기"} />}
      />
      <Viewer />
    </div>
  );
};

export default Diary;
