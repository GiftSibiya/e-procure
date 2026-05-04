import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Dashboard",
    to: "/user",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Create Tender",
    to: "/tenderCreate",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Your Tenders",
    to: "/tenderView",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function Aside() {
  const location = useLocation();

  return (
    <aside className="w-52 min-h-[calc(100vh-4rem)] bg-surface-base border-r border-border-subtle flex flex-col py-5 px-3 font-body flex-shrink-0">
      <div className="space-y-0.5">
        <p className="text-content-muted text-[10px] font-mono uppercase tracking-[0.15em] px-3 mb-3">
          Navigation
        </p>

        {navItems.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${
                active
                  ? "bg-accent-jade/12 text-accent-jade border border-accent-jade/20"
                  : "text-content-secondary hover:text-content-primary hover:bg-surface-secondary border border-transparent"
              }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
              {active && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-jade flex-shrink-0" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-4 border-t border-border-subtle px-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-status-active" />
          <span className="text-content-muted text-xs font-mono">System operational</span>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
