import { Analytics } from "@vercel/analytics/react";
import { Provider } from "use-http";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const options = {
    interceptors: {
      request: async ({ options }) => {
        return options;
      },
      response: async ({ response }) => {
        return response;
      },
    },
  };

  return (
    <>
      <Provider url={process.env.PUBLIC_API_URL} options={options}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </>
  );
};

export default App;
