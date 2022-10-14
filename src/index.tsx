import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import App from "./App";
import store from "./redux/modules";

setInterval(() => {
  ReactDOM.render(
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>,
    document.getElementById("root")
  );
}, 100);
