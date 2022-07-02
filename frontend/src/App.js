import PageHeader from "./layouts/header";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { store } from "./utils/store";
import { history } from "./utils/history";
function App() {
  return (
    <Provider store={store}>
      <Router history={history}></Router>
      <PageHeader />
    </Provider>
  );
}

export default App;
