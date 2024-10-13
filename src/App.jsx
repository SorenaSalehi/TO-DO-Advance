import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TodoProvider } from "./Context/TodoContext";
import Layout from "./pages/Layout/Layout";
import Spinner from "./component/Spinner/Spinner";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Form = lazy(() => import("./pages/Form/Form"));
const Tasks = lazy(() => import("./pages/Tasks/Tasks"));
const TasksFinished = lazy(() => import("./pages/TasksFinished/TasksFinished"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

//cm(in the public i create a _redirect file , this is for fix the problem when the pages refresh)

export default function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Layout>
          <Suspense
            fallback={
              <div className="spinnerBg">
                <Spinner />
              </div>
            }
          >
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="form" element={<Form />} />
              <Route path="tasks" element={<Tasks/>} />
              <Route path="finished" element={<TasksFinished />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TodoProvider>
  );
}
