import { Link, useNavigate } from "react-router-dom";
import { useSkaftin } from "../../lib/skaftin";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const { user, logout } = useSkaftin();
  const displayName = [user?.name, user?.last_name].filter(Boolean).join(" ").trim() || "Khanyi Sadik";
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    void (async () => {
      await logout();
      navigate("/");
    })();
  };

  return (
    <header className="h-16 bg-surface-base border-b border-border-subtle flex items-center justify-between px-6 sticky top-0 z-50 font-body">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-accent-jade flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="6" height="6" rx="1" fill="#060d1f" />
            <rect x="11" y="1" width="6" height="6" rx="1" fill="#060d1f" />
            <rect x="1" y="11" width="6" height="6" rx="1" fill="#060d1f" />
            <rect x="11" y="11" width="6" height="6" rx="1" fill="#060d1f" />
          </svg>
        </div>
        <Link
          to="/user"
          className="font-display font-bold text-content-primary text-lg tracking-widest uppercase hover:text-accent-jade transition"
        >
          E-Procure
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-7">
        <Link
          to="/user"
          className="text-content-secondary hover:text-content-primary text-sm font-medium transition"
        >
          Dashboard
        </Link>
        <Link
          to="/tenderView"
          className="text-content-secondary hover:text-content-primary text-sm font-medium transition"
        >
          Tenders
        </Link>
        <Link
          to=""
          className="text-content-secondary hover:text-content-primary text-sm font-medium transition"
        >
          Queries
        </Link>
      </nav>

      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={handleLogout}
          className="text-content-secondary hover:text-content-primary text-sm font-medium transition cursor-pointer"
        >
          Sign Out
        </button>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-accent-jade/15 border border-accent-jade/35 flex items-center justify-center">
            <span className="text-accent-jade text-xs font-mono font-bold">{initials}</span>
          </div>
          <span className="text-content-primary text-sm font-medium hidden md:block">{displayName}</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
