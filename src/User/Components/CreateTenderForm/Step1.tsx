import { useState, type FormEvent } from "react";
import { apiUrl } from "../../../lib/apiBase";

function Step1() {
  const [tenderName, setTenderName] = useState("");
  const [tenderScope, setTenderScope] = useState("");
  const [tenderBid, setTenderBid] = useState("");
  const [tenderIssue, setTenderIssue] = useState("");
  const [tenderClosing, setTenderClosing] = useState("");
  const [tenderSessionDate, setTenderSessionDate] = useState("");
  const [tenderVenue, setTenderVenue] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await fetch(apiUrl("/tenders"), {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenderName,
          tenderScope,
          tenderBid,
          tenderIssue,
          tenderClosing,
          tenderSessionDate,
          tenderVenue,
        }),
      });
      if (result.ok) {
        const data = (await result.json()) as unknown;
        localStorage.setItem("tender", JSON.stringify(data));
        alert("Tender submitted successfully");
        window.location.href = "/user";
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-surface-secondary border border-border-subtle text-content-primary placeholder-content-muted focus:outline-none focus:border-accent-jade focus:ring-2 focus:ring-accent-jade/12 transition font-body text-sm resize-none";
  const labelClass =
    "block text-content-secondary text-[11px] font-mono uppercase tracking-[0.12em] mb-2";

  return (
    <form className="p-6" onSubmit={(ev) => void handleSubmit(ev)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Tender Name / Description</label>
            <textarea
              className={`${inputClass} h-36`}
              placeholder="Enter tender name and brief description..."
              value={tenderName}
              onChange={(e) => setTenderName(e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Scope of Work</label>
            <textarea
              className={`${inputClass} h-52`}
              placeholder="Describe the full scope of work..."
              value={tenderScope}
              onChange={(e) => setTenderScope(e.target.value)}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Bid Number</label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. BID/2024/001"
              value={tenderBid}
              onChange={(e) => setTenderBid(e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Issue Date</label>
            <input
              type="date"
              className={inputClass}
              value={tenderIssue}
              onChange={(e) => setTenderIssue(e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Closing Date</label>
            <input
              type="date"
              className={inputClass}
              value={tenderClosing}
              onChange={(e) => setTenderClosing(e.target.value)}
            />
          </div>
          <div className="pt-1 border-t border-border-subtle">
            <label className={labelClass}>Briefing Session Date &amp; Time</label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                className={inputClass}
                value={tenderSessionDate}
                onChange={(e) => setTenderSessionDate(e.target.value)}
              />
              <input type="time" className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Briefing Session Venue</label>
            <textarea
              className={`${inputClass} h-20`}
              placeholder="Enter venue address..."
              value={tenderVenue}
              onChange={(e) => setTenderVenue(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-border-subtle flex justify-end">
        <button
          type="submit"
          className="px-8 py-3 rounded-xl bg-accent-jade text-content-inverse font-display font-bold text-sm tracking-[0.1em] uppercase hover:bg-accent-jade-light active:scale-[0.98] transition"
        >
          Submit Tender
        </button>
      </div>
    </form>
  );
}

export default Step1;
