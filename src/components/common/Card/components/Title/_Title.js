export const Title = ({ parentClassName, ingredient }) => {
  return (
    <>
      <span className={`${parentClassName}__title`}>
        Нямушка
      </span>
      <span className={`${parentClassName}__subtitle`}>
        с фуа-гра
        {/* {ingredient} */}
      </span>
    </>
  )
}
