import styled from "styled-components";
import Plus from "../assets/Plus";
import { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../App";

interface InputProps {
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

function InputTasks({ setTasks }: InputProps) {
  const [newTask, setNewTask] = useState("");
  const [id, setId] = useState(0);
  function createNewTask() {
    const taskJustAdded: Task = {
      concluded: false,
      description: newTask,
      id,
    };
    setTasks((prevState: Task[]) => [...prevState, taskJustAdded]);
    setNewTask("");
    setId(id + 1)
  }

  return (
    <TaskInput>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        type="text"
      />
      <button disabled={newTask.length === 0} onClick={createNewTask}>
        <div className="inside">
          Criar
          <Plus />
        </div>
      </button>
    </TaskInput>
  );
}

export default InputTasks;

const TaskInput = styled.div`
  width: min(80%, 700px);
  transform: translateY(-30px);
  display: flex;
  justify-content: space-between;
  input {
    background-color: var(--gray-500);
    width: min(638px, 80%);
    height: 54px;
    border-radius: 10px;
    color: #808080;
    font-family: Inter;
    padding: 16px;
  }
  button {
    width: 90px;
    height: 52px;
    background-color: var(--blue-dark);
    border-radius: 10px;
  }

  button:hover {
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .inside {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    color: white;
  }
`;
