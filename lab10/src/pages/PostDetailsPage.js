import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPostDetails } from "../slices/PostDetailsSlice";
import { useParams } from "react-router-dom";
import PostDetails from "../components/PostDetails";
import { fetchComments } from "../slices/Comments";
import Comment from "../components/Comment";

const PostDetailsPage = () => {
  const dispatch = useDispatch();

  // 리덕스 스토어가 관리하는 전역 state 객체중 컴포넌트에서 필요한 state를 선택
  const { post, loading: postLoading, hasError: postHasError } = useSelector((state) => state.postDetails);
  const { comments, loading: commentsLoading, hasError: commentsHasError } = useSelector((state) => state.comments);

  // url param 값 가져오기  (:id)값
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPostDetails(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  const renderPostDetails = () => {
    if (postLoading) {
      return <p>로딩중 ..</p>;
    }

    if (postHasError) {
      return <p>에러 ..</p>;
    }

    return <PostDetails post={post} />;
  };

  const renderComments = () => {
    if (commentsLoading) {
      return <p>로딩중 ..</p>;
    }

    if (commentsHasError) {
      return <p>에러 ..</p>;
    }

    return comments.map((comment) => <Comment key={comment.id} comment={comment} />);
  };

  return (
    <section>
      <h1>포스트 상세 보기</h1>
      {renderPostDetails()}
      <h2>댓글 목록</h2>
      {renderComments()}
    </section>
  );
};

export default PostDetailsPage;
