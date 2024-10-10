// 4 - Template Expression
const TemplateExpression = () => {
  const name = "Matheus"
  const data = {
    age: 22,
    job: "QA/Programador"
  }
  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <p>Bem vindo {name} !!</p>
      <p>Sua idade é {data.age}</p>
      <p>Sua profissão é {data.job}</p>
    </div>
  )
}

export default TemplateExpression
