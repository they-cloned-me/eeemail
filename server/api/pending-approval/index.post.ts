export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // In a real application, you would save this to a database
  console.log('New pending approval item:', body)

  return {
    id: Math.floor(Math.random() * 1000) + 4, // Generate a random ID
    ...body,
    date: new Date().toISOString().split('T')[0] // Current date
  }
})