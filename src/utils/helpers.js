export const createLine = (present) => {
  switch (present) {
    case '1':
      return 'мышь в подарок'
    case '2':
      return `${present} мыши в подарок`
    case '3':
      return `${present} мыши в подарок`
    case '4':
      return `${present} мыши в подарок`
    default:
      return `${present} мышей в подарок заказчик доволен`
  }
}
