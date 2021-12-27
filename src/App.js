import { Switch, Route, BrowserRouter } from "react-router-dom";

import TodoList from "./pages/TodoList";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TodoList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
