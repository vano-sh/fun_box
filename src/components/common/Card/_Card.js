import { useEffect, useState } from 'react'
import {
  Header,
  Title,
  Description,
  PackageWeight,
  Footer,
} from './components'
import clsx from 'clsx'

export const Card = ({ item }) => {
  const {
    title,
    subtitle,
    quantity,
    present,
    weight,
    footerDescription,
    availability,
  } = item

  const [isActive, setIsActive] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [isDisabled, setIsDisabled] = useState(() =>
    availability === '0' ? true : false
  )

  const className = 'card'

  const classNames = clsx(className, {
    active: isActive,
    disabled: isDisabled,
  })

  const handleCardClick = () => {
    if (isDisabled) return

    setIsActive((prev) => !prev)
    setIsHover((prev) => !prev)
  }

  const handleCardOnMouse = () => {
    isActive && setIsHover((prev) => !prev)
  }

  return (
    <div
      className={classNames}
      onClick={handleCardClick}
      onMouseOver={handleCardOnMouse}
      onMouseOut={handleCardOnMouse}>
      <div className={`${className}__wrapper`}>
        <Header parentClassName={className} isHover={isHover} />
        <Title
          parentClassName={className}
          title={title}
          subtitle={subtitle}
        />
        <Description
          parentClassName={className}
          quantity={quantity}
          present={present}
        />
        <PackageWeight
          parentClassName={className}
          weight={weight}
        />
      </div>
      <Footer
        parentClassName={className}
        footerDescription={footerDescription}
        subtitle={subtitle}
        isActive={isActive}
        isDisabled={isDisabled}
      />
    </div>
  )
}
