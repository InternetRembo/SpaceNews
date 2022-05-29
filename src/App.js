import "./App.css";
import { Container, Typography } from "@mui/material";
import { Provider, useSelector } from "react-redux";
import store from "./redux/redux-store";
import Program from "./components/Program/Program";

function App() {
  return (
    <Provider store={store}>
      <Container fixed={true} maxWidth={"1290 "}>
        <Program />
      </Container>
    </Provider>
  );
}

export default App;
