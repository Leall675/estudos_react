const ConditionalRender = () => {
  const name = "Matheus"
  const number = 1
  return (
    <div>
      {name && <p>teste</p>}  {/* Vai renderizar se for true */}
      {name === "Matheus" ? <p>Olá {name}</p> : <p>Seu nome nao é Matheus !</p>}
      {number > 0 ? (<p>Numero maior que 1</p>) : (<p>é menor !!</p>)}
    </div>
  )
}

export default ConditionalRender
