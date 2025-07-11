"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Calendar, Phone, Map, Users, Plus, ArrowRight } from "lucide-react"

const quickActions = [
  {
    title: "Banking",
    description: "Secure access",
    icon: CreditCard,
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
  {
    title: "Submit Annual Leave",
    description: "Request time off",
    icon: Calendar,
    color: "bg-green-50 text-green-600 hover:bg-green-100",
  },
  {
    title: "Call Reception",
    description: "Contact front desk",
    icon: Phone,
    color: "bg-purple-50 text-purple-600 hover:bg-purple-100",
  },
  {
    title: "Maps & Transport",
    description: "Navigation & booking",
    icon: Map,
    color: "bg-orange-50 text-orange-600 hover:bg-orange-100",
  },
  {
    title: "Meeting Room Booking",
    description: "Reserve conference rooms",
    icon: Users,
    color: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
  },
  {
    title: "Employee Directory",
    description: "Contact colleagues",
    icon: Users,
    color: "bg-teal-50 text-teal-600 hover:bg-teal-100",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Quick Actions</CardTitle>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Customize
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Button
              key={action.title}
              variant="ghost"
              className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-gray-50"
            >
              <div className={`p-2 rounded-lg ${action.color}`}>
                <action.icon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">{action.title}</div>
                <div className="text-sm text-gray-500">{action.description}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
