import "./TodoListItem.scss";
import cn from "classnames";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

//  { id: 1, text: "Todo app 만들기", checked: true },

// Todo Item
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={cn("checkbox", { checked })}
        onClick={(e) => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove" onClick={(e) => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
