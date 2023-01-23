export const Footer = ({
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
          <span>
            Чего сидишь? Порадуй котэ, <a href='#'> купи.</a>
          </span>
        )}
      </span>
    </div>
  )
}
