import { useState, useEffect } from "react";
import axios from "axios";
import HeaderComponent from "../Components/Header";
import Aside from "../Components/Aside";
import TenderItem from "../Components/TenderItem";
import Footer from "../Components/Footer";
import type { Tender, TenderViewResponse } from "../../types/tender";
import { apiUrl } from "../../lib/apiBase";

export default function TenderView() {
  const [tenders, setTenders] = useState<Tender[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<TenderViewResponse>(apiUrl("/tenderView"));
        setTenders(response.data.tenders);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, []);

  const handleTenderDeleted = (id: string) => {
    setTenders((prev) => prev.filter((t) => t._id !== id));
  };

  return (
    <div className="min-h-screen bg-surface-primary flex flex-col font-body">
      <HeaderComponent />
      <div className="flex flex-1">
        <Aside />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-display font-bold text-content-primary text-2xl">Your Tenders</h2>
              <p className="text-content-secondary text-sm mt-1">
                {tenders.length} {tenders.length === 1 ? "tender" : "tenders"} total
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-accent-jade/20 border-t-accent-jade rounded-full animate-spin" />
            </div>
          ) : tenders.length === 0 ? (
            <div className="text-center py-20 bg-surface-base border border-border-subtle rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-surface-secondary border border-border-subtle flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-content-muted" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-content-secondary font-medium">No tenders found</p>
              <p className="text-content-muted text-sm mt-1">Create your first tender to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {tenders.map((tender) => (
                <TenderItem key={tender._id} tender={tender} onDelete={handleTenderDeleted} />
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
