"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  CreditCard,
  Calendar,
  Phone,
  Map,
  Car,
  Users,
  FileText,
  Building2,
  TrendingUp,
  Bell,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface SidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const navigationItems = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", icon: Home, active: true },
      { name: "Analytics", icon: TrendingUp },
    ],
  },
  {
    title: "Financial Services",
    items: [
      { name: "Banking", icon: CreditCard },
      { name: "Client Management", icon: Building2 },
      { name: "Reports", icon: FileText, hasSubmenu: true },
    ],
  },
  {
    title: "Office Services",
    items: [
      { name: "Annual Leave", icon: Calendar },
      { name: "Call Reception", icon: Phone },
      { name: "Meeting Rooms", icon: Users },
      { name: "Employee Directory", icon: Users },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Maps & Transport", icon: Map },
      { name: "Book Transport", icon: Car },
      { name: "News & Insights", icon: Bell },
      { name: "Announcements", icon: Bell },
    ],
  },
]

export function Sidebar({ open, onOpenChange }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Overview", "Financial Services"])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => onOpenChange(false)} />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Maddocks</h2>
                <p className="text-xs text-gray-500">Australian Law Firm</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-3 py-4">
            <nav className="space-y-2">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <Collapsible
                    open={expandedSections.includes(section.title)}
                    onOpenChange={() => toggleSection(section.title)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      >
                        {section.title}
                        {expandedSections.includes(section.title) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1 mt-1">
                      {section.items.map((item) => (
                        <Button
                          key={item.name}
                          variant={item.active ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start px-6 py-2 text-sm",
                            item.active
                              ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                          )}
                        >
                          <item.icon className="mr-3 h-4 w-4" />
                          {item.name}
                          {item.hasSubmenu && <ChevronRight className="ml-auto h-4 w-4" />}
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                  {section.title !== "Resources" && <Separator className="my-2" />}
                </div>
              ))}
            </nav>
          </ScrollArea>

          {/* Settings */}
          <div className="p-3 border-t border-gray-200">
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <Settings className="mr-3 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
