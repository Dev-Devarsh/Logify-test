import Home from "./pages/Home";
import { useLogify } from "react-logify";


function App() {
   const { user, onLogin, onLogout } = useLogify();

  return (
    <>
      {!user.id && (
        <center>
          <button onClick={onLogin}>Signup / Login</button>
        </center>
      )}
      {user.id && (
        <>
          <center>
            {user.name}
           
          </center>
          <Home setAuth={onLogout} />
        </>
      )}
    </>
  );
}

export default App;
