import PropTypes from 'prop-types'
import './BemVindo.css'

function BemVindo({ nomeUsuario, totalHabitos }) {
  const dataAtual = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <section className="bem-vindo">
      <div className="bem-vindo__content">
        <h2 className="bem-vindo__titulo">👋 Bem-vindo, {nomeUsuario}!</h2>
        <p className="bem-vindo__descricao">
          Você tem <strong>{totalHabitos}</strong> hábito{totalHabitos !== 1 ? 's' : ''} cadastrado{totalHabitos !== 1 ? 's' : ''}.
        </p>
        <p className="bem-vindo__data">{dataAtual}</p>
      </div>
    </section>
  )
}

BemVindo.propTypes = {
  nomeUsuario: PropTypes.string.isRequired,
  totalHabitos: PropTypes.number.isRequired
}

BemVindo.defaultProps = {
  nomeUsuario: 'Usuário',
  totalHabitos: 0
}

export default BemVindo