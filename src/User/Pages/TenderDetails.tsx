import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "../Components/Header";
import Aside from "../Components/Aside";
import Footer from "../Components/Footer";
import type { Tender, TenderDetailResponse } from "../../types/tender";
import { apiUrl } from "../../lib/apiBase";

export default function TenderDetails() {
  const { id } = useParams();
  const [tender, setTender] = useState<Tender | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const response = await axios.get<TenderDetailResponse>(apiUrl(`/tender/${id}`));
        setTender(response.data.tender);
      } catch (error) {
        console.error("Error fetching tender details:", error);
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-surface-primary flex flex-col font-body">
      <HeaderComponent />
      <div className="flex flex-1">
        <Aside />
        <main className="flex-1 p-6 overflow-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Link to="/tenderView" className="text-content-muted hover:text-content-secondary transition">
              Tenders
            </Link>
            <svg className="w-3.5 h-3.5 text-content-muted" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-content-secondary">Details</span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-accent-jade/20 border-t-accent-jade rounded-full animate-spin" />
            </div>
          ) : tender ? (
            <div className="max-w-3xl animate-fade-up">
              <div className="bg-surface-base border border-border-subtle rounded-2xl p-8">
                {/* Header */}
                <div className="mb-8 pb-6 border-b border-border-subtle">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-accent-amber text-xs bg-accent-amber/10 border border-accent-amber/20 px-2.5 py-1 rounded-lg">
                      {tender.tenderBid}
                    </span>
                  </div>
                  <h1 className="font-display font-bold text-content-primary text-3xl">
                    {tender.tenderName}
                  </h1>
                </div>

                {/* Date grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Issue Date", value: tender.tenderIssue },
                    { label: "Closing Date", value: tender.tenderClosing },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="bg-surface-secondary border border-border-subtle rounded-xl p-4"
                    >
                      <p className="text-content-muted text-[10px] font-mono uppercase tracking-widest mb-1.5">
                        {label}
                      </p>
                      <p className="text-content-primary font-mono text-sm">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Scope */}
                <div className="bg-surface-secondary border border-border-subtle rounded-xl p-5">
                  <p className="text-content-muted text-[10px] font-mono uppercase tracking-widest mb-3">
                    Scope of Work
                  </p>
                  <p className="text-content-secondary text-sm leading-relaxed">{tender.tenderScope}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-content-secondary">Tender not found.</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
