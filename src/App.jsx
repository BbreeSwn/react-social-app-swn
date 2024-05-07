import Router from './routes/Router/';
import ThemeContextProvider from './context/ThemeContext';
import AutnContextProvider from './context/AuthenContext';
import PostContextProvider from './context/PostContext';


function App() {
return (

  <ThemeContextProvider>
    <AutnContextProvider>
      <PostContextProvider>
        <Router />
      </PostContextProvider>
    </AutnContextProvider>
  </ThemeContextProvider>

);
}

export default App
