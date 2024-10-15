export default defineEventHandler(() => {
  return {
    activeCampaigns: 12,
    totalSubscribers: 5234,
    engagementRate: 68,
    recentActivities: [
      { title: 'New campaign "Summer Sale" created', time: '2 hours ago' },
      { title: 'Reminder: Review pending approvals', time: '5 hours ago' },
      { title: '50 new subscribers added', time: 'Yesterday at 3:45 PM' },
    ]
  }
})