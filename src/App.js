import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import List from "./router/List";
import Nav from "./router/Nav";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return(
    <RecoilRoot>
      <Router>
        <Nav />
        <Routes>
          <Route path="/page/:detail/:num" element={<List />}/>
          <Route path="/movie/:id" element={<Detail />} />
          <Route path={ProgressEvent.env.PUBLIC_URL + "/"} element={<Home />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
  /* ProgressEvent.env.PUBLIC_URL : public의 절대경로  */
}

export default App;
