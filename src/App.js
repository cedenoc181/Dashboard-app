import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scene/Global/Topbar";
import Sidebar from "./Scene/Global/Sidebar";
import Dashboard from "./Scene/Dashboard";
// import Team from "./Scene/team";
// import Invoices from "./Scene/invoices";
// import Calendar from "./Scene/Calendar";
// import Contacts from "./Scene/contacts";
// import Bar from "./Scene/bar";
// import Form from "./Scene/form";
// import Line from "./Scene/line";
// import Pie from "./Scene/pie";
// import FAQ from "./Scene/faq";
// import Geography from "./Scene/geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="app">
      <Sidebar />
      <main className="content">
          <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              {/* <Route path="/team" element={<Team/>} /> */}
              {/* <Route path="/contacts" element={<Contacts/>} /> */}
              {/* <Route path="/invoices" element={<Invoices/>} /> */}
              {/* <Route path="/calendar" element={<Calendar/>} /> */}
              {/* <Route path="/bar" element={<Bar/>} /> */}
              {/* <Route path="/form" element={<Form/>} /> */}
              {/* <Route path="/faq" element={<FAQ/>} /> */}
              {/* <Route path="/line" element={<Line/>} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              {/* <Route path="/geography" element={<Geography/>} /> */}




              
            </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
