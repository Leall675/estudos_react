import {useState} from 'react'

const Data = () => {
  let someData = 10
  const [ number, setNumber] = useState(0)
  return (
    <div>
      <div>
        <p>o valor é {someData}</p>
        <button onClick={() => {someData = 15}}>Aumentar valor</button>
      </div>
      <div>
        <p>o valor do state é {number}</p>
        <button onClick={() => {setNumber((n) => n + 1)}}>Teste</button>
      </div>
    </div>
  )
}

export default Data
