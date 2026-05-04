import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSkaftin } from "../../lib/skaftin";

export default function Intro() {
  const navigate = useNavigate();
  const { configured, login, authError, clearAuthError } = useSkaftin();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    clearAuthError();
    if (!configured) return;
    setSubmitting(true);
    try {
      await login({ credential: credential.trim(), password, method: "email" });
      navigate("/user");
    } catch {
      /* error surfaced via authError */
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-primary flex overflow-hidden font-body">
      {/* Left Branding Panel */}
      <div className="hidden lg:flex flex-col justify-between w-[52%] bg-surface-base p-14 relative overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#06d6a0 1px, transparent 1px), linear-gradient(90deg, #06d6a0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-[38%] left-[40%] w-[500px] h-[500px] rounded-full bg-accent-jade opacity-[0.06] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-accent-amber opacity-[0.05] blur-[80px] pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-accent-jade flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1" fill="#060d1f" />
              <rect x="11" y="1" width="6" height="6" rx="1" fill="#060d1f" />
              <rect x="1" y="11" width="6" height="6" rx="1" fill="#060d1f" />
              <rect x="11" y="11" width="6" height="6" rx="1" fill="#060d1f" />
            </svg>
          </div>
          <span className="font-display font-bold text-content-primary text-xl tracking-widest uppercase">
            E-Procure
          </span>
        </div>

        {/* Hero text */}
        <div className="relative z-10 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-jade/25 bg-accent-jade/8 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-jade animate-pulse" />
              <span className="text-accent-jade text-[11px] font-mono font-medium tracking-[0.15em] uppercase">
                Procurement Platform
              </span>
            </div>
            <h1 className="font-display font-extrabold text-content-primary leading-[1.05] mb-5">
              <span className="text-[3.8rem]">Streamline</span>
              <br />
              <span className="text-[3.8rem] text-accent-jade">Procurement.</span>
            </h1>
            <p className="text-content-secondary text-[1.05rem] max-w-sm leading-relaxed">
              Manage tender RFQs, track applications, and automate your procurement workflow — all in one secure platform.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Tenders Processed", value: "2,400+" },
              { label: "Active Users", value: "380+" },
              { label: "Avg. Response", value: "24h" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-border-subtle rounded-2xl p-4 bg-surface-secondary/40 backdrop-blur-sm"
              >
                <p className="font-mono font-semibold text-accent-amber text-2xl">{stat.value}</p>
                <p className="text-content-muted text-[11px] mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-content-muted text-xs font-mono">© 2024 E-Procure. All rights reserved.</p>
        </div>
      </div>

      {/* Right Login Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-surface-primary">
        <div className="w-full max-w-[400px] animate-fade-up">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10 justify-center">
            <div className="w-9 h-9 rounded-lg bg-accent-jade flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="1" width="6" height="6" rx="1" fill="#060d1f" />
                <rect x="11" y="1" width="6" height="6" rx="1" fill="#060d1f" />
                <rect x="1" y="11" width="6" height="6" rx="1" fill="#060d1f" />
                <rect x="11" y="11" width="6" height="6" rx="1" fill="#060d1f" />
              </svg>
            </div>
            <span className="font-display font-bold text-content-primary text-xl tracking-widest uppercase">
              E-Procure
            </span>
          </div>

          <div className="mb-8">
            <h2 className="font-display font-bold text-content-primary text-[2rem] mb-2">Welcome back</h2>
            <p className="text-content-secondary text-sm">Sign in to access your procurement dashboard.</p>
          </div>

          {!configured && (
            <div className="mb-5 p-4 rounded-2xl border border-status-error/30 bg-status-error/8">
              <p className="text-status-error text-xs leading-relaxed">
                Skaftin not configured. Set{" "}
                <code className="font-mono bg-surface-secondary px-1.5 py-0.5 rounded text-[11px]">
                  VITE_SKAFTIN_PROJECT_ID
                </code>{" "}
                and{" "}
                <code className="font-mono bg-surface-secondary px-1.5 py-0.5 rounded text-[11px]">
                  VITE_SKAFTIN_API_KEY
                </code>{" "}
                in{" "}
                <code className="font-mono bg-surface-secondary px-1.5 py-0.5 rounded text-[11px]">.env</code>
              </p>
            </div>
          )}

          {authError && (
            <div
              className="mb-5 p-4 rounded-2xl border border-status-error/30 bg-status-error/8"
              role="alert"
            >
              <p className="text-status-error text-sm">{authError}</p>
            </div>
          )}

          <form className="space-y-4" onSubmit={(ev) => void handleSubmit(ev)}>
            <div>
              <label
                className="block text-content-secondary text-xs font-mono uppercase tracking-widest mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                name="credential"
                type="email"
                autoComplete="email"
                placeholder="you@organization.gov.za"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                disabled={!configured || submitting}
                className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-border-subtle text-content-primary placeholder-content-muted focus:outline-none focus:border-accent-jade focus:ring-2 focus:ring-accent-jade/15 transition disabled:opacity-50 font-body text-sm"
              />
            </div>

            <div>
              <label
                className="block text-content-secondary text-xs font-mono uppercase tracking-widest mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={!configured || submitting}
                className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-border-subtle text-content-primary placeholder-content-muted focus:outline-none focus:border-accent-jade focus:ring-2 focus:ring-accent-jade/15 transition disabled:opacity-50 font-body text-sm"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="remember"
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 rounded border border-border-default bg-surface-secondary peer-checked:bg-accent-jade peer-checked:border-accent-jade transition" />
                </div>
                <span className="text-content-secondary text-sm">Remember me</span>
              </label>
              <button type="button" className="text-accent-jade text-sm hover:text-accent-jade-light transition">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={!configured || submitting}
              className="w-full py-3.5 mt-2 rounded-xl bg-accent-jade text-content-inverse font-display font-bold text-sm tracking-[0.1em] uppercase transition hover:bg-accent-jade-light active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border-subtle text-center">
            <p className="text-content-secondary text-sm">
              Don&apos;t have an account?{" "}
              <button type="button" className="text-accent-jade hover:text-accent-jade-light transition font-medium">
                Request Access
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
