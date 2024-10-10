import './App.css'
// 2 - Importando componente
import FirtsComponents from './components/FirtsComponents'

// 4 - Template Expression
import TemplateExpression from './components/TemplateExpression'

// 5 - Hierarquia de componentes
import MyComponents from './components/MyComponents'

// 6 - Events
// 7 - Eventos com funcao
import Events from './components/Events'


function App() {
  // 3 - comentarios
  return (
    <>
      {/* Chamando primeiro componente */}
      <h1>Fundamentos do React</h1>
      <FirtsComponents />
      {/* Importando template expression */}
      <TemplateExpression />
      {/* Hierarquia de componentes */}
      <MyComponents />
      {/* Eventos */}
      <Events />
    </>
  )
}

export default App
