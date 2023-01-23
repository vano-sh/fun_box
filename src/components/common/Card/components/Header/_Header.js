import clsx from 'clsx'

export const Header = ({ parentClassName, isHover }) => {
  const className = `${parentClassName}__header`
  const classNames = clsx(className, {
    hover: isHover,
  })

  return (
    <span className={classNames}>
      {isHover
        ? 'Котэ не одобряет?'
        : 'Сказочное заморское яство'}
    </span>
  )
}
