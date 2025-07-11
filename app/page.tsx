"use client"

import { useState } from "react"
import { Bell, Search, Settings, User, Menu, TrendingUp, Users, FileText, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sidebar } from "./components/sidebar"
import { FinancialChart } from "./components/financial-chart"
import { QuickActions } from "./components/quick-actions"
import { RecentActivity } from "./components/recent-activity"
import { MetricsOverview } from "./components/metrics-overview"

export default function ImprovedPartnerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">Good afternoon, Senior Partner!</h1>
                <p className="text-sm text-gray-500">Friday 11 July 2025 | 01:22 pm</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search dashboard..." className="pl-10 w-64" />
              </div>

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">New client inquiry</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Monthly report ready</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>SP</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Key Metrics Overview */}
            <MetricsOverview />

            {/* Quick Actions */}
            <QuickActions />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Financial Performance - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Financial Performance</CardTitle>
                        <CardDescription>Track billing progress and revenue trends</CardDescription>
                      </div>
                      <Tabs defaultValue="monthly" className="w-auto">
                        <TabsList>
                          <TabsTrigger value="monthly">Monthly</TabsTrigger>
                          <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                          <TabsTrigger value="annual">Annual</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <FinancialChart />
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity - Takes up 1 column */}
              <div className="space-y-6">
                <RecentActivity />

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">This Month</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">New Clients</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Active Cases</span>
                      <span className="font-semibold">89</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Billable Hours</span>
                      <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Collection Rate</span>
                      <span className="font-semibold text-green-600">94%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Executive Reports Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Executive Reports</CardTitle>
                <CardDescription>Comprehensive insights across all firm operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                  >
                    <FileText className="h-6 w-6" />
                    <span className="text-sm">Monthly Report</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                  >
                    <TrendingUp className="h-6 w-6" />
                    <span className="text-sm">Performance Analytics</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                  >
                    <Users className="h-6 w-6" />
                    <span className="text-sm">Client Analysis</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                  >
                    <Building2 className="h-6 w-6" />
                    <span className="text-sm">Firm Overview</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
