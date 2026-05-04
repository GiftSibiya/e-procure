function Notifications() {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center font-body">
      <div className="w-12 h-12 rounded-2xl bg-surface-secondary border border-border-subtle flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-content-muted" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
      </div>
      <p className="text-content-secondary text-sm font-medium">No notifications</p>
      <p className="text-content-muted text-xs mt-1">You&apos;re all caught up!</p>
    </div>
  );
}

export default Notifications;
