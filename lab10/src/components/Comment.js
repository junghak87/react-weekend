const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <article>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{body}</p>
    </article>
  );
};

export default Comment;
