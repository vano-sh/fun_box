import { Card } from '../../common'
import { db as cards } from 'db/db'

export const OutputCards = () => {
  return (
    <section className='output-cards'>
      <div className='output-cards__wrapper'>
        {cards.length > 0 &&
          cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
      </div>
    </section>
  )
}
