"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "submitted annual leave request",
    time: "2 minutes ago",
    avatar: "SC",
    type: "leave",
  },
  {
    id: 2,
    user: "Michael Roberts",
    action: "booked meeting room A",
    time: "15 minutes ago",
    avatar: "MR",
    type: "booking",
  },
  {
    id: 3,
    user: "Emma Wilson",
    action: "completed client consultation",
    time: "1 hour ago",
    avatar: "EW",
    type: "client",
  },
  {
    id: 4,
    user: "David Kim",
    action: "updated case notes",
    time: "2 hours ago",
    avatar: "DK",
    type: "case",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={`/placeholder-${activity.avatar.toLowerCase()}.jpg`} />
              <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <Badge variant="secondary" className="text-xs">
              {activity.type}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
