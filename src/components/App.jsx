import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";
import { Rates } from "./Rates/Rates";

export const App = () => {
  return (
     <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="rates" element={<Rates />}/>
          
            
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Route>
      </Routes>
  );
};
