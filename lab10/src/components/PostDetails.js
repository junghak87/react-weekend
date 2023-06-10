const PostDetails = ({ post }) => {
  const { userId, id, title, body, username, email } = post;

  return (
    <article>
      <h2>{title}</h2>
      <p>{username}</p>
      <p>{email}</p>
      <p>{body}</p>
    </article>
  );
};

export default PostDetails;
