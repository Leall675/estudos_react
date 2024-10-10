

const Events = () => {
  const handleClick = () => {
    console.log("Executou com função !");
  }

  //8 - Função com renderização
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>
    } else {
      return <h1>Renderizando outra coisa</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => console.log("Teste")}>Clique aqui</button>
      </div>
      {/* onClick com função */}
      <div>
        <button onClick={handleClick}>Botao - com função</button>
      </div>
      {/* Função com renderizacao */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events
