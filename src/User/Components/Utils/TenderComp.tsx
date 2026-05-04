export interface TenderCompProps {
  tenderName: string;
  adDate: string;
  closeDate: string;
  status: string;
  submitName: string;
  submitDate: string;
}

const statusStyles: Record<string, { dot: string; badge: string }> = {
  Active: {
    dot: "bg-status-active",
    badge: "text-status-active bg-status-active/10 border-status-active/25",
  },
  Pending: {
    dot: "bg-status-pending",
    badge: "text-status-pending bg-status-pending/10 border-status-pending/25",
  },
  Closed: {
    dot: "bg-status-closed",
    badge: "text-status-closed bg-status-closed/10 border-status-closed/25",
  },
};

export default function TenderComp({
  tenderName,
  adDate,
  closeDate,
  status,
  submitName,
  submitDate,
}: TenderCompProps) {
  const s = statusStyles[status] ?? statusStyles.Closed;

  return (
    <div className="flex items-center justify-between bg-surface-secondary border border-border-subtle rounded-xl px-4 py-3.5 hover:border-border-default hover:bg-surface-elevated transition group font-body">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
        <div className="flex-1 min-w-0">
          <h4 className="text-content-primary font-medium text-sm truncate">{tenderName}</h4>
          <div className="flex items-center gap-4 mt-0.5">
            <span className="text-content-muted text-xs font-mono">Ad: {adDate}</span>
            <span className="text-content-muted text-xs font-mono">Close: {closeDate}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 ml-4 flex-shrink-0">
        <div className="hidden md:flex flex-col items-end">
          <span className="text-content-secondary text-xs">{submitName}</span>
          <span className="text-content-muted text-[11px] font-mono">{submitDate}</span>
        </div>

        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-xs font-medium font-mono ${s.badge}`}
        >
          {status}
        </span>

        <button
          type="button"
          className="text-content-muted hover:text-accent-jade transition opacity-0 group-hover:opacity-100"
          aria-label="View tender"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 8h10m0 0l-4-4m4 4l-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
