import './App.css';
import React, {useState} from 'react'
import Table from './Table';

const url = 'http://127.0.0.1:5000/twitter'

const App = () => {
  const [hastag,setHastag] = useState()
  const [data,setData] = useState()
  const [loading, setLoading] = useState(false)
  const send = async ()  => {
    setLoading(true)
    const response = await fetch(url,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({hashtag:hastag})
    })
    const result = await response.json()
    setData(result.data)
    console.log(data)
    setLoading(false)
  }
  return (
    <div className="App">
      <div className='container mt-5'>
        <h1 className='mb-5'>BuzzerWatch</h1>
        <div className="input-group input-group-lg">
          <input type="text" className="form-control border border-success" onChange={(e)=>setHastag(e.target.value)} placeholder='#hashtag' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
          <button className="btn btn-success" type="button" id="button-addon2" onClick={()=>send()}>Analyze</button>
        </div>
        <div className='mt-5'>
          {loading?<h3>loading...</h3>:data&&<Table data={data}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
