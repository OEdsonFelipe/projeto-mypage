import Header from './components/Header'
import BemVindo from './components/BemVindo'
import SecaoHabitos from './components/SecaoHabitos'
import Footer from './components/Footer'
import ExerciciosList from './components/ExerciciosList'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <BemVindo nomeUsuario="Ficha de Treino" totalHabitos={4} />
        
        <SecaoHabitos titulo="Meus Exercicios">
          <ExerciciosList />
        </SecaoHabitos>
      </main>
      <Footer />
    </div>
  )
}

export default App;