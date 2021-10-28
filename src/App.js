import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import LoadingProvider from "./contexts/LoadingProvider";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <LoadingProvider>
        <AuthProvider>
          <BrowserRouter>
            <Switch></Switch>
          </BrowserRouter>
        </AuthProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
