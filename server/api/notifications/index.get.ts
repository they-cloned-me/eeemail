export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'New Campaign Created',
      message: 'Your campaign "Summer Sale 2023" has been successfully created.',
      type: 'info',
      date: '2023-05-15T10:30:00Z',
      status: 'unread'
    },
    {
      id: 2,
      title: 'Subscriber Milestone',
      message: 'Congratulations! You\'ve reached 5,000 subscribers.',
      type: 'success',
      date: '2023-05-14T15:45:00Z',
      status: 'unread'
    },
    {
      id: 3,
      title: 'Campaign Approval Required',
      message: 'The campaign "New Product Launch" requires your approval before sending.',
      type: 'warning',
      date: '2023-05-13T09:15:00Z',
      status: 'unread'
    }
  ]
})