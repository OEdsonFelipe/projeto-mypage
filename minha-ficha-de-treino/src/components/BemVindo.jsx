function BemVindo({ nomeUsuario, totalHabitos }) {
  return (
    <div>
      <h2>Bem-vindo, {nomeUsuario}!</h2>
      <p>Você tem {totalHabitos} hábitos cadastrados.</p>
    </div>
  )
}

export default BemVindo