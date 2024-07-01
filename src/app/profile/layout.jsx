"use client";
import NavBarComponent from "@/components/NavBarComponent";
import Sidebar from "@/components/SidebarComponent";

export default function EmployeeDashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`fixed top-0 left-0 h-full transition-transform z-50 w-[280px]`}
      >
        <Sidebar />
      </aside>
      <div className="flex-1 w-full md:ml-[240px]">
        <NavBarComponent />
        <main className="p-4 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
