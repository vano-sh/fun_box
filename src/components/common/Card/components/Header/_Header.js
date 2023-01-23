import clsx from 'clsx'

export const Header = ({ parentClassName, isHover }) => {
  const className = `${parentClassName}__header`
  const classNames = clsx(className, {
    hover: isHover,
  })

  return (
    <header class='card__header'>
      <div class='card__corner'></div>
      <div class='card__rectangle'>
        <span className={classNames}>
          {isHover
            ? 'Котэ не одобряет?'
            : 'Сказочное заморское яство'}
        </span>
      </div>
    </header>
  )
}
