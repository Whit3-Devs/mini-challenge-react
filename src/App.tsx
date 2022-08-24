import { Route, Routes } from "react-router-dom";
import { Form } from "./views/Form";
import { Home } from "./views/Home";
import { Header } from "./components/Header";
import UserProvider from "./context/UserProvider";

export const App = () => {
  return (
    <>
      <Header />
      <UserProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Form />} />
      </Routes>
      </UserProvider>
    </>
  );
};
