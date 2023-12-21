const api_key = 'HsLqh3Cj31zxheq43H69jo1uU85Oxarg7JGcAjwF'

export const getApodData = async (date) => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`)

  if (!response.ok) { throw new Error('Error to obtain data from api') }

  const data = await response.json()
  console.log(data)

  return data
}
