import { NewRoom } from "./pages/NewRoom";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from "./pages/Home";
import { useState } from "react";

import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/light';
import GlobalStyle from './styles/global';


function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <BrowserRouter >
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;