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
  ScreenSize:window.innerWidth
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

      //for clicking outside the sidebar
    case "closeSidebar":
      return {
        ...state,
        isSidebarHidden: !state.isSidebarHidden ? true : state.isSidebarHidden,
      };

      //for responsive style
      case "screenChanged": return {...state , screenSize : action.payload}
  }
}

//create todo context
const todoContext = createContext();

function TodoProvider({ children }) {
  const [{ tasks, finishedTasks, isLoading, isSidebarHidden,screenSize }, dispatch] =
    useReducer(reducer, initialState);

 
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

  //display the page content
  function handleLoading() {
    dispatch({ type: "loaded" });
  }

  const phoneScreen= screenSize <= 450

  return (
    <todoContext.Provider
      value={{
        dispatch,
        isLoading,
        tasks,
        finishedTasks,
        isSidebarHidden,
        screenSize,
        phoneScreen,
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
