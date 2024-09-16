import ListaDeTarefas from '../../containers/ListaDeTarefas'
import BarraLateral from '../../containers/BarraLateral'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros></BarraLateral>
    <ListaDeTarefas></ListaDeTarefas>
    <BotaoAdicionar></BotaoAdicionar>
  </>
)

export default Home
