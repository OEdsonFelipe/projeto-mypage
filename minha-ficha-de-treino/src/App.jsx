// src/App.jsx
import { useState } from 'react'
import Header    from './components/Header'
import BemVindo  from './components/BemVindo'
import SecaoHabitos from './components/SecaoHabitos'
import Footer from './components/Footer'
import './App.css'
import ExerciciosList from './components/ExerciciosList'

function App() {

   const habits = [
   { id: 1, titulo: 'Exercício',   meta: 5, ativo: true,  diasFeitos: 5 },
   { id: 2, titulo: 'Leitura',     meta: 7, ativo: true,  diasFeitos: 3 },
   { id: 3, titulo: 'Meditação',   meta: 7, ativo: false, diasFeitos: 0 },
   { id: 4, titulo: 'Hidratação',  meta: 7, ativo: true,  diasFeitos: 6 },
 ]


  return (
    <div>
      <Header />
     <BemVindo nomeUsuario="turma iteam" totalHabitos={habits.length} />
     <SecaoHabitos titulo="Meus Hábitos">
       <ExerciciosList habits={habits} />
     </SecaoHabitos>
      <h1>Minha Ficha de Treino</h1>
      <p>Tenha a sua ficha de treino organizada e eficiente!</p>
    <Footer/>
    </div>
  )
}

export default App