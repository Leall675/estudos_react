import { useState } from "react"

const ListRender = () => {
  const [list, setList] = useState(["Matheus", "Amanda", "Paulo"])

  const [ users, setUsers] = useState([
    {id:1, name: "Matheus", age: 22},
    {id:2, name: "Amanda", age: 24},
    {id:3, name: "Paulo", age: 17},
  ])

  const deleteRandowUsers = () => {
    const usersLength = users.length
    const randomNumber = Math.floor(Math.random() * usersLength)
    setUsers((prevUsers) => prevUsers.filter((user) => randomNumber != user.id))
    

  }

  return (
    <div>
      {/* Lista sem uma key */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* Lista com uma key */}
      <p>Lista passando uma key:</p>
      <ul>
        {users.map((i) => (
          <li key={i.id}>Me chamo {i.name} e tenho {i.age}</li>
        ))}
      </ul>
      {/* previous state */}
      <button onClick={deleteRandowUsers}>Delete rendom user</button>
    </div>
  )
}

export default ListRender
