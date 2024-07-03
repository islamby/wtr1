import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";
import './style.css'

function App() {
  const [data,setData] = useState({});
  return (
    <div className="wrapper">
      <Form setData={setData} />
      <Table data={data} />
    </div>
  );
}

export default App;
