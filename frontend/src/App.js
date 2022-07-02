import PageHeader from "./layouts/header";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./utils/store";
import { history } from "./utils/history";
import PageSignin from "./pages/auth/signin";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <PageHeader />

        <main>
          <Routes>
            <Route path="" exact component={PageSignin} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
