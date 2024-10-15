export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const id = query.id

  // In a real application, you would delete this from a database
  console.log('Deleted pending approval item with ID:', id)

  return {
    success: true,
    message: `Item with ID ${id} has been deleted`
  }
})