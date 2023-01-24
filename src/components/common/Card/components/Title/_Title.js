import { memo } from 'react'

export const Title = memo(
  ({ parentClassName, title, subtitle }) => {
    return (
      <>
        <span className={`${parentClassName}__title`}>
          {title}
        </span>
        <span className={`${parentClassName}__subtitle`}>
          {subtitle}
        </span>
      </>
    )
  }
)
