import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SET_PAGE_TITLE } from "@src/helpers/Base";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    SET_PAGE_TITLE("Application loading...");

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }, []);

  return (
    <div className="app-loading">
      Application loading...
    </div>
  )
}

export default App;
