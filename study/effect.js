import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  useEffect(() => {
    console.log("I run only once."); 
  }, []); // 한번만 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes.");  
  }, [keyword]);  // keyword가 변화할 때마다 실행
  useEffect(() => {
    console.log("I run when 'counter' changes."); 
  }, [counter]); // counter가 변화할 때마다 실행
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes."); 
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
