import { useState } from 'react';
import './App.css';

function App() {
  const [countinc, setCountinc] = useState(0)
  const [countdec, setCountdec] = useState(0)

  
  return (
    <>
      <div className="card">
        <button onClick={() => setCountinc((countinc) => countinc + 1)}>
          count is {countinc}
        </button>
        <button onClick={() => setCountinc(() => setCountinc(0))}>
          Refreshcount
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCountdec((countdec) => countdec - 1)}>
          count is {countdec}        
        </button>
        <button onClick={() => setCountdec(() => setCountdec(0))}>
          Refreshcount
        </button>
      </div>
    </>
  )
}

export default App;
