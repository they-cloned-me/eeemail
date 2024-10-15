export default defineEventHandler(() => {
  // In a real application, you would query your database to get the count of unread notifications
  // For this example, we'll just return a static number
  return 2
})