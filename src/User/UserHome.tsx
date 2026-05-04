import HeaderComponent from "./Components/Header";
import Footer from "./Components/Footer";
import TabView from "./Components/TabView/TabView";
import Aside from "./Components/Aside";
import { useSkaftin } from "../lib/skaftin";

export default function UserHome() {
  const { user } = useSkaftin();
  const firstName = user?.name || "Khanyi";

  return (
    <div className="min-h-screen bg-surface-primary flex flex-col font-body">
      <HeaderComponent />
      <div className="flex flex-1">
        <Aside />
        <main className="flex-1 p-6 overflow-auto">
          {/* Welcome banner */}
          <div className="bg-surface-base border border-border-subtle rounded-2xl p-6 mb-6 relative overflow-hidden">
            <div
              className="absolute right-0 top-0 bottom-0 w-72 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #06d6a0 25%, transparent 25%), linear-gradient(225deg, #06d6a0 25%, transparent 25%)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-accent-jade opacity-[0.04] blur-[50px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-content-muted text-[11px] font-mono uppercase tracking-[0.15em] mb-1">
                Welcome back
              </p>
              <h2 className="font-display font-bold text-content-primary text-2xl">{firstName}</h2>
              <p className="text-content-secondary text-sm mt-1">
                Here&apos;s an overview of your procurement activity.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Active Tenders", value: "3", note: "+1 this week" },
              { label: "Pending Applications", value: "12", note: "4 new today" },
              { label: "Closed This Month", value: "8", note: "On track" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-base border border-border-subtle rounded-2xl p-5 hover:border-border-default transition"
              >
                <p className="text-content-muted text-[10px] font-mono uppercase tracking-[0.15em] mb-2">
                  {stat.label}
                </p>
                <p className="font-display font-bold text-content-primary text-4xl">{stat.value}</p>
                <p className="text-accent-jade text-xs mt-2 font-mono">{stat.note}</p>
              </div>
            ))}
          </div>

          <TabView />
        </main>
      </div>
      <Footer />
    </div>
  );
}
