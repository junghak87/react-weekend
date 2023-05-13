import "./TodoTemplate.scss";
// App Title 을 보여주는 템플릿 Component

const TodoTemplate = ({ children }) => {
  //   console.log(children);

  return (
    <div className="TodoTemplate">
      {/* App Title */}
      <div className="app-title">일정관리</div>
      {/* App Componet 에서 children prps로 전달 받은 JSX */}
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
