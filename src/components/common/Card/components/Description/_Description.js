import { memo } from 'react'
import { createLine } from 'utils/helpers'

export const Description = memo(
  ({ parentClassName, quantity, present }) => {
    return (
      <>
        <span className={`${parentClassName}__quantity`}>
          {`${quantity} порций`}
        </span>
        <span className={`${parentClassName}__present`}>
          {createLine(present)}
        </span>
      </>
    )
  }
)
