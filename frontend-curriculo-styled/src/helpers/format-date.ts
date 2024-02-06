export function formatPeriod(date: string) {
  const dateOne = date.split(' - ')[0]
  const dateTwo = date.split(' - ')[1]
  const dateStart = new Date(dateOne)
  const dateEnd = new Date(dateTwo)

  const dayOne = String(dateStart.getDate()).padStart(2, '0')
  const monthOne = String(dateStart.getMonth() + 1).padStart(2, '0')
  const yearOne = dateStart.getFullYear()

  const dayTwo = String(dateEnd.getDate()).padStart(2, '0')
  const montTwo = String(dateEnd.getMonth() + 1).padStart(2, '0')
  const yearTwo = dateEnd.getFullYear()

  return `${dayOne}/${monthOne}/${yearOne} - ${dayTwo}/${montTwo}/${yearTwo}`
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}
