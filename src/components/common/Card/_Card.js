import {
  Header,
  Title,
  Description,
  PackageWeight,
  Footer,
} from './components'

export const Card = () => {
  const className = 'card'

  return (
    <div className={className}>
      <div className={`${className}__wrapper`}>
        <Header parentClassName={className} />
        <Title parentClassName={className} />
        <Description parentClassName={className} />
        <PackageWeight parentClassName={className} />
      </div>
      <Footer parentClassName={className} />
    </div>
  )
}
