import SideNav from "@/app/ui/dashboard/sidenav";
import LoginForm from "../ui/login-form";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>
    <SideNav />
    <LoginForm />
  </>
  );
}
