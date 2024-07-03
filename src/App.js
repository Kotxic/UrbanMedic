import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={'/Login'} element={<Login/>}/>
            <Route path={'/Main'} element={<ProtectedRoute> <Main/></ProtectedRoute>}/>
            <Route path="*" element={<Navigate to='/Login' replace/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
