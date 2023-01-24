import { memo } from 'react'

export const PackageWeight = memo(
  ({ parentClassName, weight }) => {
    return (
      <div className={`${parentClassName}__weight`}>
        <span className={`${parentClassName}__volume`}>
          {weight}
        </span>
        <span className={`${parentClassName}__measure`}>кг</span>
      </div>
    )
  }
)
