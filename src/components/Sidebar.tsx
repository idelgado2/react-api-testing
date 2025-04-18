import { User } from "../App";

interface SidebarProps {
  user: User;
}

export function Sidebar({ user }: SidebarProps) {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.human}</div>
    </div>
  );
}

interface ProfileProps {
  user: User;
}

export function Profile({ user }: ProfileProps) {
  return <div>{user.name}</div>;
}
