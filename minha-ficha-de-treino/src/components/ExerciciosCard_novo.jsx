import PropTypes from 'prop-types'
import './ExerciciosCard.css'

function ExerciciosCard({ nome, descricao = '', meta, ativo = true, diasFeitos = 0, onRemover }) {
  const metaAtingida = diasFeitos >= meta
  const percentualConclusao = Math.min((diasFeitos / meta) * 100, 100)

  const mensagemMeta = metaAtingida
    ? 'Meta da semana atingida!'
    : `${diasFeitos} de ${meta} dias concluídos`

  return (
    <article className={`exercicios-card ${ativo ? 'exercicios-card--ativo' : 'exercicios-card--pausado'}`}>
      <div className="exercicios-card__header">
        <h3 className="exercicios-card__titulo">{nome}</h3>
        <span className={`exercicios-card__status ${ativo ? 'status--ativo' : 'status--pausado'}`} aria-label={`Status: ${ativo ? 'Ativo' : 'Pausado'}`}>
          {ativo ? '✓ Ativo' : '⏸ Pausado'}
        </span>
      </div>

      {descricao && (
        <p className="exercicios-card__descricao">{descricao}</p>
      )}

      <div className="exercicios-card__progresso" aria-label={`Progresso: ${diasFeitos} de ${meta} dias`}>
        <div className="progresso__barra">
          <div 
            className="progresso__preenchido" 
            style={{ width: `${percentualConclusao}%` }}
            role="progressbar"
            aria-valuenow={diasFeitos}
            aria-valuemin={0}
            aria-valuemax={meta}
          />
        </div>
        <p className="progresso__texto">{mensagemMeta}</p>
      </div>

      {metaAtingida && (
        <div className="exercicios-card__celebracao" role="status" aria-live="polite">
          🎉 Parabéns! Você manteve a sequência essa semana!
        </div>
      )}

      {onRemover && (
        <button 
          type="button" 
          onClick={onRemover}
          className="exercicios-card__botao exercicios-card__botao--remover"
          aria-label={`Remover exercício: ${nome}`}
        >
          🗑️ Remover
        </button>
      )}
    </article>
  )
}

ExerciciosCard.propTypes = {
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string,
  meta: PropTypes.number.isRequired,
  ativo: PropTypes.bool,
  diasFeitos: PropTypes.number,
  onRemover: PropTypes.func
}

ExerciciosCard.defaultProps = {
  descricao: '',
  ativo: true,
  diasFeitos: 0,
  onRemover: null
}

export default ExerciciosCard
