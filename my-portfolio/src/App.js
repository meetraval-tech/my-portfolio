import React from "react";
import Cursor from "./Components/Cursor/Cursor";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
const App = ()=>{
  return(
   <>
   <Cursor />
   <Sidebar/>
   <About/>
   <TechStack/>
   <Project/>
   </>
  );
}
export default App;