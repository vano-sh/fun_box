export const PackageWeight = ({ parentClassName, weight }) => {
  return (
    <div className={`${parentClassName}__weight`}>
      <span className={`${parentClassName}__volume`}>
        0,5
        {/* {weight} */}
      </span>
      <span className={`${parentClassName}__measure`}>кг</span>
    </div>
  )
}
