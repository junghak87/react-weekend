const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <aside className="comment">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{body}</p>
    </aside>
  );
  // test
};

export default Comment;
