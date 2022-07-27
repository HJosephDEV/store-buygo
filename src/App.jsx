import { AppRouter } from './router';
import GlobalStyle from './assets/global.js';

export const App = () => {
  return(
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;

