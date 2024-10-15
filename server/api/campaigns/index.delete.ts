export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const id = query.id

  // In a real application, you would delete this from a database
  console.log('Deleted campaign with ID:', id)

  return {
    success: true,
    message: `Campaign with ID ${id} has been deleted`
  }
})