import React from "react";
import {CssBaseline} from "@material-ui/core";
import second from "first";
import RTL from "./components/RTL";
import ThemeProvider from './components/ThemeProvider'
import MasterLayout from './screens/MasterLayout'

function App() {
  return (
    <ThemeProvider>
      <RTL>
        {/* <div className="App"></div> */}
       <CssBaseline/>
       <MasterLayout/>
      </RTL>
    </ThemeProvider>
  );
}

export default App;
