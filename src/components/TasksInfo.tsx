import styled from "styled-components";
import { Task } from "../App";
interface TasksInfoProps {
  tasks: Task[];
  concludedTasks: number;
}

function TasksInfo({ tasks, concludedTasks }: TasksInfoProps) {
  return (
    <TasksInfoWrapper>
      <p className="created">
        Tarefas criadas <span className="number-of-tasks">{tasks.length}</span>
      </p>
      <p className="concluded">
        Concluídas{" "}
        <span className="number-of-tasks">
          {" "}
          {concludedTasks} de {tasks.length}
        </span>
      </p>
    </TasksInfoWrapper>
  );
}

export default TasksInfo;

const TasksInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Inter;
  .created {
    color: var(--blue);
    font-size: 14px;
  }
  .number-of-tasks {
    background-color: var(--gray-400);
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 12px;
    color: var(--gray-200);
  }
  .concluded {
    color: var(--purple);
  }
`;
