import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error/ErrorPage";
import TaskListPage from "./pages/Task/TaskList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<TaskListPage />}></Route>
        {/* <Route path={"/home"} element={<TaskListPage />}></Route> */}
        {/* pathに＊を設定すると、用意されてないURLにアクセスがあったときに自動的に飛ばされるページ設定ができる */}
        <Route path={"*"} element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
