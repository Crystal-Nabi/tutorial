import PageHeader from "./layouts/header";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./utils/store";
import { history } from "./utils/history";
import PageSignin from "./pages/auth/signin";
import PageSignup from "./pages/auth/signup";
import PageFooter from "./layouts/footer";
import PageHome from "./pages/home";
import PageIntroduce from "./pages/introduce";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <PageHeader />

        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/signup" element={<PageSignup />} />
            <Route path="/signin" element={<PageSignin />} />
            <Route path="/login" element={<PageSignin />} />
            <Route path="/introduce/our" element={<PageIntroduce />} />
          </Routes>
        </main>
        <PageFooter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
