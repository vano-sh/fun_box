import clsx from 'clsx'

export const Header = ({ parentClassName, isHover }) => {
  const className = `${parentClassName}__header`
  const classNames = clsx(className, {
    hover: isHover,
  })

  return (
    <header className={classNames}>
      <div className={`${parentClassName}__corner`}></div>
      <div className={`${parentClassName}__text`}>
        <span>
          {isHover
            ? 'Котэ не одобряет?'
            : 'Сказочное заморское яство'}
        </span>
      </div>
    </header>
  )
}
