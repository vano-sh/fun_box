import { memo } from 'react'

export const Footer = memo(
  ({
    parentClassName,
    footerDescription,
    subtitle,
    isActive,
    isDisabled,
  }) => {
    return (
      <div
        className={`${parentClassName}__footer`}
        onClick={(event) => event.stopPropagation()}>
        <span>
          {isActive && footerDescription}
          {isDisabled && `Печалька, ${subtitle} закончился.`}
          {!isActive && !isDisabled && (
            <>
              Чего сидишь? Порадуй котэ, <a href='#'> купи.</a>
            </>
          )}
        </span>
      </div>
    )
  }
)
