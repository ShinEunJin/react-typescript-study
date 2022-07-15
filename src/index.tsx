import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import App from "./App";
import store from "./redux/modules";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);
