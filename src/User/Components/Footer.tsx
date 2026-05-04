export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-base px-6 py-4 font-body">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-accent-jade/15 border border-accent-jade/25 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1" fill="#06d6a0" />
              <rect x="11" y="1" width="6" height="6" rx="1" fill="#06d6a0" />
              <rect x="1" y="11" width="6" height="6" rx="1" fill="#06d6a0" />
              <rect x="11" y="11" width="6" height="6" rx="1" fill="#06d6a0" />
            </svg>
          </div>
          <span className="font-display font-bold text-content-muted text-sm tracking-widest uppercase">
            E-Procure
          </span>
        </div>

        <div className="flex items-center gap-6">
          {["About", "Contact", "Terms of Use", "Privacy Policy"].map((link) => (
            <button
              key={link}
              type="button"
              className="text-content-muted hover:text-content-secondary text-xs transition"
            >
              {link}
            </button>
          ))}
        </div>

        <p className="text-content-muted text-xs font-mono">© 2024</p>
      </div>
    </footer>
  );
}
