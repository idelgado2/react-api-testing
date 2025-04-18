import { Profile, Sidebar } from "./Sidebar";

interface DashboardUsingContextProps {}

export default function DashboardUsingContext({}: DashboardUsingContextProps) {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}
