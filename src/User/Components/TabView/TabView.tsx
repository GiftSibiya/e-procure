import { useState } from "react";
import Applications from "./Applications";
import Notifications from "./Notifications";

const TabView = () => {
  const [activeTab, setActiveTab] = useState<"Applications" | "Notifications">("Applications");

  return (
    <div className="bg-surface-base border border-border-subtle rounded-2xl overflow-hidden font-body">
      {/* Tab bar */}
      <div className="flex border-b border-border-subtle">
        {(["Applications", "Notifications"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3.5 px-6 text-sm font-medium transition relative ${
              activeTab === tab
                ? "text-accent-jade"
                : "text-content-secondary hover:text-content-primary"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent-jade rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4">
        {activeTab === "Applications" && <Applications />}
        {activeTab === "Notifications" && <Notifications />}
      </div>
    </div>
  );
};

export default TabView;
