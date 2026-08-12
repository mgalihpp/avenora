"use client";

import { Home, Settings, User } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@/features/auth/components/sign-out-button";
import { authClient } from "@/features/auth/lib/auth-client";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { data: session } = authClient.useSession();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <BrandLogo />
                <span className="font-semibold">avenora</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 px-2 py-1.5 text-sm">
          <User className="size-4" />
          <span className="truncate">{session?.user.name ?? "User"}</span>
        </div>
        <SignOutButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
