import Data from './components/Data'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import PropsName from './components/PropsName'
import DestructProps from './components/DestructProps'

function App() {

  return (
    <>
      <h1>Hooks</h1>
      {/* HOOKS - useState */}
      <Data />
      {/* Renderizando lista */}
      <ListRender />
      {/* Renderizacao condicional */}
      <ConditionalRender />
      {/* PROPS */}
      <PropsName name="Matheus" age="22"/>
      {/* Desestruturando PROPS */}
      <DestructProps marca="Matheus" km={22} price={26.000} />
    </>
  )
}

export default App