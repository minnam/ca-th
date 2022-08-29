import moment from 'moment'

const MONTH_NAMES = moment.monthsShort()

export const generateTestData = (days, max, min) => {
  const today = new Date()
  const input = []
  const months = {}

  for (let i = 0; i < days; i++) {
    const date = new Date()
    date.setDate(today.getDate() + i)
    const active = Math.random() > 0.8
    let isFirstDOM

    if (active) {
      if (!months[date.getMonth()]) {
        isFirstDOM = true
        months[date.getMonth()] = true
      }
    }


    input.push({
      x: date,
      y: (max - min) * Math.random() + min,
      highlight: isFirstDOM,
      active,
      label: `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`,
    })
  }

  return { input, max, min }
}