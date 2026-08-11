import MainLayout from "../layouts/MainLayout";
import Greeting from "../components/dashboard/Greeting";
import Stats from "../components/dashboard/Stats";
import QuickActions from "../components/dashboard/QuickActions";
import "../styles/Dashboard.css";
import RecentActivity from "../components/dashboard/RecentActivity";
import WeeklyGoal from "../components/dashboard/WeeklyGoal";
function Dashboard() {
  return (
    <MainLayout>

    <Greeting />

    <Stats />

    <QuickActions />

    <RecentActivity />

    <WeeklyGoal />

</MainLayout>
  );
}

export default Dashboard;