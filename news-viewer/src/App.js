import { useState } from "react";
import axios from 'axios';
import NewsList from "./components/NewsList";

const App = () => {
  const [data, setData] = useState()
  const onClick = async () => {
    await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=7169c9b12af24019ba0d1a3c9c83a1f4').then(res => {
      setData(res.data);
    })
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}

      <NewsList />
    </div>
  )
}

export default App;

//