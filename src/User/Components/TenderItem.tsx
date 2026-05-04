import axios from "axios";
import { Link } from "react-router-dom";
import type { Tender } from "../../types/tender";
import { apiUrl } from "../../lib/apiBase";

export interface TenderItemProps {
  tender: Tender;
  onDelete?: (id: string) => void;
}

function TenderItem({ tender, onDelete }: TenderItemProps) {
  const { _id, tenderName, tenderScope, tenderIssue, tenderBid, tenderClosing } = tender;

  const handleDelete = async () => {
    if (!window.confirm("Delete this tender? This cannot be undone.")) return;
    try {
      await axios.delete(apiUrl(`/tender/${_id}`));
      onDelete?.(_id);
    } catch (error) {
      console.error("Error deleting tender:", error);
    }
  };

  return (
    <div className="bg-surface-base border border-border-subtle rounded-2xl p-5 hover:border-border-default transition group font-body">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="font-mono text-accent-amber text-xs bg-accent-amber/10 border border-accent-amber/20 px-2 py-0.5 rounded-lg">
              {tenderBid}
            </span>
          </div>
          <h3 className="font-display font-bold text-content-primary text-xl mb-2 truncate">
            {tenderName}
          </h3>
          {tenderScope && (
            <p className="text-content-secondary text-sm leading-relaxed line-clamp-2">{tenderScope}</p>
          )}
          <div className="flex items-center gap-5 mt-4">
            <div>
              <p className="text-content-muted text-[10px] font-mono uppercase tracking-widest">Issued</p>
              <p className="text-content-secondary text-xs font-mono mt-0.5">{tenderIssue}</p>
            </div>
            <div className="w-px h-7 bg-border-subtle" />
            <div>
              <p className="text-content-muted text-[10px] font-mono uppercase tracking-widest">Closing</p>
              <p className="text-content-secondary text-xs font-mono mt-0.5">{tenderClosing}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <Link to={`/tender/${_id}`}>
            <button
              type="button"
              className="px-3.5 py-2 rounded-xl text-xs font-medium text-content-secondary bg-surface-secondary border border-border-subtle hover:text-content-primary hover:border-border-default transition cursor-pointer"
            >
              View
            </button>
          </Link>
          <Link to={`/tender/${_id}/edit`}>
            <button
              type="button"
              className="px-3.5 py-2 rounded-xl text-xs font-medium text-content-secondary bg-surface-secondary border border-border-subtle hover:text-content-primary hover:border-border-default transition cursor-pointer"
            >
              Edit
            </button>
          </Link>
          <button
            type="button"
            onClick={() => void handleDelete()}
            className="px-3.5 py-2 rounded-xl text-xs font-medium text-status-error bg-status-error/8 border border-status-error/20 hover:bg-status-error/15 transition cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TenderItem;
