import { useEffect, useState } from "react";
import { BoardPageStyle } from "../ZStyles/PageStyles";
import { BoardStyle } from "../ZStyles/AtomStyles";
import { BasicBtnO } from "../Organisms/BtnsO";
import { PATH } from "../Constants/routePath";
import { Link } from "react-router-dom";
import { PostCard } from "../Atoms/Cards";
import { useSelector } from "react-redux";
import { getDocs, orderBy, query } from "firebase/firestore";
import { postsCollection } from "../Firebase";

const BoardPage = () => {
  const [resolved, setResolved] = useState([]);
  const userState = useSelector((state) => state.user);
  useEffect(() => {
    const getPosts = async () => {
      const ordered = await getDocs(
        query(postsCollection, orderBy("timestamp", "desc"))
      );
      const result = ordered.docs.map((el) => el.data());
      setResolved(result);
    };
    getPosts();
  }, []);

  return (
    <>
      <BoardPageStyle>
        <div className="btn--wrapper">
          {userState.list.length === 0 ? (
            <Link to="/login">로그인하세요</Link>
          ) : (
            <BasicBtnO content="글쓰기" mode="create" path={PATH.CREATE} />
          )}
        </div>
        <BoardStyle>
          <PostCard resolved={resolved} />
        </BoardStyle>
      </BoardPageStyle>
    </>
  );
};

export default BoardPage;
