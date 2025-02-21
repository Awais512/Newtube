import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const StudioNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/studio">
            <div className="p-4 flex items-center gap-1">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">Studio</p>
            </div>
          </Link>
        </div>
        <div className="flex-1" />
        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
