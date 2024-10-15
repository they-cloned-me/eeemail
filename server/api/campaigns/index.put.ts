export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // In a real application, you would update this in a database
  console.log('Updated campaign:', body)

  return {
    ...body,
    updatedAt: new Date().toISOString()
  }
})