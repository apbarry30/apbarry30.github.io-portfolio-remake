import Preloader from "../src/components/Preloader";
import Switcher from "../src/components/Switcher";
import SalimovHead from "../src/SalimovHead";
import "../styles/globals.css";
import { Fragment } from "react";

// const App = ({ Component, pageProps }) => {
//   return (
//     <Fragment>
//       <SalimovHead />
//       <Switcher />
//       <Preloader />
//       <Component {...pageProps} />
//     </Fragment>
//   );
// };
// export default App;

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  <Fragment>
    <SalimovHead />
    <Switcher />
    <Preloader />
  </Fragment>
}

export default MyApp
