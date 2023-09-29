import styled from "styled-components";
import { Consts } from "./assets/consts";
import Header from "./components/Header";
import { useState } from "react";
import InputTasks from "./components/Input";
import TasksInfo from "./components/TasksInfo";
import ConcludedTask from "./components/ConcludedTask";
import NotConcludedTask from "./components/NotConcludedTask";
import { TbClipboardText } from "react-icons/tb";

export interface Task {
  id: number;
  description: string;
  concluded: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const concludedTasks = tasks.filter((val) => val.concluded === true).length;

  function toggleConcluded(id: number) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            concluded: !task.concluded,
          };
        } else {
          return task;
        }
      });
    });
  }

  function deleteTask(id: number) {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  }

  return (
    <Consts>
      <Header />
      <Content>
        <InputTasks setTasks={setTasks} />
        <TasksWrapper>
          <TasksInfo tasks={tasks} concludedTasks={concludedTasks} />
          {tasks.length === 0 ? (
            <TasksEmpty>
              <TbClipboardText />
              <p className="first-text">
                Você ainda não tem tarefas cadastradas
              </p>
              <p className="second-text">
                Crie tarefas e organize seus itens a fazer
              </p>
            </TasksEmpty>
          ) : (
            tasks.map((task) =>
              task.concluded ? (
                <ConcludedTask
                  id={task.id}
                  description={task.description}
                  key={task.id}
                  toggleConcluded={toggleConcluded}
                  deleteTask={deleteTask}
                />
              ) : (
                <NotConcludedTask
                  id={task.id}
                  key={task.id}
                  description={task.description}
                  deleteTask={deleteTask}
                  toggleConcluded={toggleConcluded}
                />
              )
            )
          )}
        </TasksWrapper>
      </Content>
    </Consts>
  );
}

export default App;

const TasksEmpty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-300);
  font-size: 100px;
  margin: 60px 0;
  font-family: Inter;
  .first-text {
    margin-top: 30px;
    font-size: 16px;
    font-weight: 700;
  }
  .second-text {
    font-size: 16px;
  }
`;

const TasksWrapper = styled.div`
  width: min(80%, 700px);
`;

const Content = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--gray-600);
`;
