

export async function propertyApi() {
  const response = await fetch('/api/properties');

  if(response.ok) {
    return await response.json()
  } 

  return 'error'
}