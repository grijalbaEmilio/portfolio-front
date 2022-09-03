export const windowWidthMobil = () => window.screen.width < 900

export const ramdom = () => Math.random()

function roundNumber(number) {
  return Number(number.toFixed(0))
}

/**
 *
 * @param {String} dateString
 * @returns
 */
export const dateFormat = (dateString) => {
  const date = new Date(dateString)
  const nowDate = Date.now()

  const substract = new Date(nowDate - date)

  const minutes = roundNumber(substract / 1000 / 60)
  const hours = roundNumber(minutes / 60).toFixed(0)
  const days = roundNumber(hours / 24)
  const months = roundNumber(days / 30)
  const years = roundNumber(days / 365)

  if (years === 1) {
    return 'hace 1 año'
  }
  if (years > 1) {
    return `hace ${years} años`
  }

  if (months === 1) {
    return 'hace 1 mes'
  }
  if (months > 1) {
    return `hace ${months} meses`
  }

  if (days === 1) {
    return 'hace un día'
  }
  if (days > 1) {
    return `hace ${days} días.`
  }

  if (hours === 1) {
    return 'hace una hora'
  }
  if (hours > 1) {
    return `hace ${hours} horas.`
  }

  if (minutes === 1) {
    return 'hace 1 minuto'
  }
  if (minutes > 1) {
    return `hace ${minutes} minutos`
  }

  return 'ahora'
}
