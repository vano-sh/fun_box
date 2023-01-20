export const Description = ({ parentClassName }) => {
  return (
    <>
      <span className={`${parentClassName}__quantity`}>
        10 порций
      </span>
      <span className={`${parentClassName}__present`}>
        мышь в подарок
        {/* {ingredient} */}
      </span>
    </>
  )
}
