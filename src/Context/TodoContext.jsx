import { createContext, useContext, useEffect, useReducer } from "react";

//get task from locale
function getLocaleTasks() {
  const localeTasks = localStorage.getItem("tasks");
  return localeTasks ? JSON.parse(localeTasks) : [];
}

//get finished task from local
function getFinishedTasks() {
  const localeFinished = localStorage.getItem("finishedTasks");
  return localeFinished ? JSON.parse(localeFinished) : [];
}

//initial state for reducer
const initialState = {
  isLoading: true,
  tasks: getLocaleTasks(),
  finishedTasks: getFinishedTasks(),
  isSidebarHidden: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "loaded":
      return { ...state, isLoading: false};

    case "formSubmitted":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "taskFinished":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, isFinished: true } : task
        ),
        finishedTasks: [...state.finishedTasks, action.payload],
      };

    case "taskDeleted":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        finishedTasks: state.finishedTasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    case "sidebarBtnEvent":
      return {
        ...state,
        isSidebarHidden: state.isSidebarHidden ? false : true,
      };

    case "closeSidebar":
      return {
        ...state,
        isSidebarHidden: !state.isSidebarHidden ? true : state.isSidebarHidden,
      };
  }
}

//create todo context
const todoContext = createContext();

function TodoProvider({ children }) {
  const [{ tasks, finishedTasks, isLoading, isSidebarHidden }, dispatch] =
    useReducer(reducer, initialState);

  console.log(isSidebarHidden);
  //set task to locale
  useEffect(() => {
    function setLocaleTask() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    setLocaleTask();
  }, [tasks]);

  //set finished task to locale
  useEffect(() => {
    function setFinishedTask() {
      localStorage.setItem("finishedTasks", JSON.stringify(finishedTasks));
    }
    setFinishedTask();
  }, [finishedTasks]);

  function handleLoading() {
    dispatch({ type: "loaded" });
  }
  return (
    <todoContext.Provider
      value={{
        dispatch,
        isLoading,
        tasks,
        finishedTasks,
        isSidebarHidden,
        handleLoading,
      }}
    >
      {children}
    </todoContext.Provider>
  );
}

function useTodo() {
  const context = useContext(todoContext);

  if (context === undefined)
    throw new Error("TODO CONTEXT WAS USED OUTSIDE THE PROVIDER!! ");

  return context;
}

export { TodoProvider, useTodo };
