"use client"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

export function FinancialChart() {
  const billingData = [
    { week: "Week 1", amount: 425000, percentage: 68 },
    { week: "Week 2", amount: 520000, percentage: 83 },
    { week: "Week 3", amount: 490000, percentage: 93 },
    { week: "Week 4", amount: 440000, percentage: 56 },
  ]

  return (
    <div className="space-y-6">
      {/* Monthly Progress */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Current</p>
            <p className="text-3xl font-bold text-gray-900">$1,875,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Target</p>
            <p className="text-3xl font-bold text-gray-600">$2,500,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Achievement</p>
            <p className="text-3xl font-bold text-green-600">75%</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress to target</span>
            <span className="font-medium">75% of $2.5M</span>
          </div>
          <Progress value={75} className="h-3" />
        </div>
      </div>

      {/* Weekly Breakdown */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Weekly Billing Breakdown</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {billingData.map((week, index) => (
            <Card key={week.week} className="p-4">
              <CardContent className="p-0 space-y-2">
                <div className="text-sm font-medium text-gray-600">{week.week}</div>
                <div className="text-xl font-bold text-gray-900">${(week.amount / 1000).toFixed(0)}K</div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-8 rounded ${
                      index === 0
                        ? "bg-orange-400"
                        : index === 1
                          ? "bg-yellow-400"
                          : index === 2
                            ? "bg-green-400"
                            : "bg-orange-400"
                    }`}
                  />
                  <span className="text-sm text-gray-500">{week.percentage}%</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
