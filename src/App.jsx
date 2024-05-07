import Router from './routes/Router/';
import { CssBaseline } from '@mui/material';
import ThemeContextProvider from './context/ThemeContext';
import AutnContextProvider from './context/AuthenContext';
import PostContextProvider from './context/PostContext';


function App() {
return (

  <ThemeContextProvider>
    <AutnContextProvider>
      <PostContextProvider>
        <CssBaseline />
        <Router />
      </PostContextProvider>
    </AutnContextProvider>
  </ThemeContextProvider>

);
}

export default App
