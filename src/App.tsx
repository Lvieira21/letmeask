import { NewRoom } from "./pages/NewRoom";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from "./pages/Home";
import { useState } from "react";

import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { MyThemeProvider } from './contexts/ThemeContext';


function App() {

  return (
    <MyThemeProvider>
        <BrowserRouter >
          <AuthContextProvider>
            <Switch>
              <Route path="/" exact > 
                <Home />
              </Route>
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />
              <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </AuthContextProvider>
        </BrowserRouter>
    </MyThemeProvider>
  );
}

export default App;