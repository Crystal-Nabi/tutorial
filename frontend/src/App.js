import PageHeader from "./layouts/header";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./utils/store";
import { history } from "./utils/history";
import PageSignin from "./pages/auth/signin";
import PageSignup from "./pages/auth/signup";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <PageHeader />

        <main>
          <Routes>
            <Route path="/" element={<PageSignin />} />
            <Route path="/signup" element={<PageSignup />} />
            <Route path="/signin" element={<PageSignin />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
