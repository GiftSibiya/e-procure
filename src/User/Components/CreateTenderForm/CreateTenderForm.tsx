import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

type StepId = "Step1" | "Step2" | "Step3" | "Step4" | "Step5";

const steps: { id: StepId; label: string; description: string }[] = [
  { id: "Step1", label: "Tender Details", description: "Name, scope & dates" },
  { id: "Step2", label: "Requirements", description: "Technical specs" },
  { id: "Step3", label: "Evaluation", description: "Criteria & weighting" },
  { id: "Step4", label: "Documents", description: "Attachments" },
  { id: "Step5", label: "Review", description: "Final check" },
];

export default function CreateTenderForm() {
  const [activeTab, setActiveTab] = useState<StepId>("Step1");
  const activeIndex = steps.findIndex((s) => s.id === activeTab);

  return (
    <div className="max-w-5xl font-body">
      <div className="mb-8">
        <h2 className="font-display font-bold text-content-primary text-2xl mb-1">Create New Tender</h2>
        <p className="text-content-secondary text-sm">Complete all steps to publish your tender RFQ.</p>
      </div>

      {/* Step progress bar */}
      <div className="flex items-center mb-8">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            <button
              type="button"
              onClick={() => setActiveTab(step.id)}
              className="flex items-center gap-3 group min-w-0"
            >
              <div
                className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-mono font-bold border-2 transition ${
                  i < activeIndex
                    ? "bg-accent-jade border-accent-jade text-content-inverse"
                    : i === activeIndex
                    ? "bg-surface-base border-accent-jade text-accent-jade"
                    : "bg-surface-base border-border-subtle text-content-muted"
                }`}
              >
                {i < activeIndex ? (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7l4 4 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <div className="text-left hidden sm:block min-w-0">
                <p
                  className={`text-xs font-medium truncate ${
                    i === activeIndex ? "text-content-primary" : "text-content-muted"
                  }`}
                >
                  {step.label}
                </p>
                <p className="text-content-muted text-[11px] truncate">{step.description}</p>
              </div>
            </button>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-px mx-3 transition-colors ${
                  i < activeIndex ? "bg-accent-jade" : "bg-border-subtle"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-surface-base border border-border-subtle rounded-2xl overflow-hidden">
        {activeTab === "Step1" && <Step1 />}
        {activeTab === "Step2" && <Step2 />}
        {activeTab === "Step3" && <Step3 />}
        {activeTab === "Step4" && <Step4 />}
        {activeTab === "Step5" && <Step5 />}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-5">
        <button
          type="button"
          onClick={() => {
            const i = steps.findIndex((s) => s.id === activeTab);
            if (i > 0) setActiveTab(steps[i - 1].id);
          }}
          disabled={activeIndex === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-content-secondary bg-surface-base border border-border-subtle hover:text-content-primary hover:border-border-default transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Previous
        </button>

        <span className="text-content-muted text-xs font-mono">
          Step {activeIndex + 1} of {steps.length}
        </span>

        <button
          type="button"
          onClick={() => {
            const i = steps.findIndex((s) => s.id === activeTab);
            if (i < steps.length - 1) setActiveTab(steps[i + 1].id);
          }}
          disabled={activeIndex === steps.length - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-accent-jade text-content-inverse hover:bg-accent-jade-light transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
