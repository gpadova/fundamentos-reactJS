import styled from "styled-components";
import TrashCan from "../assets/TrashCan";
import Circle from "../assets/Circle";
import { useState } from "react";

interface NotConcludedTaskProps {
  description: string;
  id: number;
  toggleConcluded: (id: number) => void;
  deleteTask: (id: number) => void;
}

function NotConcludedTask({
  description,
  id,
  toggleConcluded,
  deleteTask,
}: NotConcludedTaskProps) {
  const defaultColor = "#808080"
  const dangerColor = "#E25858"
  const [hoverTrash, setHoverTrash] = useState(false)
  return (
    <Task>
      <div className="circle" onClick={() => toggleConcluded(id)}>
        <Circle />
      </div>
      <div className="task-description">
        <p>{description}</p>
      </div>
      <div onMouseEnter={() => setHoverTrash(true)} onMouseLeave={() => setHoverTrash(false)} className="trash" onClick={() => deleteTask(id)}>
        <TrashCan fill={hoverTrash ? dangerColor : defaultColor}/>
      </div>
    </Task>
  );
}

export default NotConcludedTask;

const Task = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--gray-400);
  margin: 30px 0;
  padding: 25px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  .task-description {
    width: 80%;
    color: var(--gray-100);
    p {
      font-family: Inter;
      font-size: 14px;
      line-height: 140%;
    }
  }
  .trash:hover {
    cursor: pointer;
  }

  .circle:hover {
    cursor: pointer;
  }
`;
