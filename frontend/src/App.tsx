import { NavLink, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Icons } from "@/lib/icons";
import Auth from "@/screens/Auth";
import Join from "@/screens/Join";
import Groups from "@/screens/Groups";
import GroupDetail from "@/screens/GroupDetail";
import GroupMembers from "@/screens/GroupMembers";
import Notifications from "@/screens/Notifications";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "flex items-center gap-2 rounded-[var(--brand-radius)] px-3 py-2 text-sm font-medium transition-colors",
    isActive ? "bg-[var(--brand-hover)] text-[var(--brand-fg)]" : "text-[var(--brand-fg-muted)]",
  ].join(" ");

// The app's menu, drawn around every screen except the ones routed outside it below.
function AppShellLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="border-b"
        style={{
          backgroundColor: "var(--brand-surface)",
          borderColor: "var(--brand-border)",
        }}
      >
        <div className="flex items-center gap-6 px-6 py-2">
          <p
            className="shrink-0 text-sm font-semibold"
            style={{ fontFamily: "var(--brand-font-heading)" }}
          >
            {"Splitwise Calculator"}
          </p>
          <nav aria-label="App menu" className="flex flex-wrap items-center gap-1">
            <NavLink to="/groups" className={navLinkClass}>
              <Icons.Home size={16} />
              {"My groups"}
            </NavLink>
            <NavLink to="/notifications" className={navLinkClass}>
              <Icons.Bell size={16} />
              {"Notifications"}
            </NavLink>
            <NavLink to="/auth" className={navLinkClass}>
              <Icons.User size={16} />
              {"Sign out"}
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShellLayout />}>
        <Route path="/groups" element={<Groups />} />
        <Route path="/group-detail" element={<GroupDetail />} />
        <Route path="/group-members" element={<GroupMembers />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/join" element={<Join />} />
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}
