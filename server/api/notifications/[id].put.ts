export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  const { status } = await readBody(event)

  // In a real application, you would update this in a database
  console.log(`Updating notification ${id} status to ${status}`)

  // If status is 'later', you would set a reminder for 2 days from now
  if (status === 'later') {
    console.log(`Setting reminder for notification ${id} in 2 days`)
    // Here you would implement the logic to resurface the notification after 2 days
  }

  return {
    id,
    status,
    message: `Notification ${id} marked as ${status}`
  }
})