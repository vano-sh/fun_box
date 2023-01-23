import { Card } from '../../common'
import { db } from 'db/db'

export const OutputCards = () => {
  return (
    <div className='output-cards'>
      <div className='output-cards__wrapper'>
        {db.length > 0 &&
          db.map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </div>
    </div>
  )
}
