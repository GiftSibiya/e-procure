export interface Tender {
  _id: string;
  tenderName: string;
  tenderScope: string;
  tenderIssue: string;
  tenderBid: string;
  tenderClosing: string;
  tenderSessionDate?: string;
  tenderVenue?: string;
}

export interface TenderViewResponse {
  tenders: Tender[];
}

export interface TenderDetailResponse {
  tender: Tender;
}

export interface TenderFormState {
  tenderName: string;
  tenderBid: string;
  tenderScope: string;
  tenderIssue: string;
  tenderClosing: string;
  tenderSessionDate: string;
  tenderVenue: string;
}

export const emptyTenderFormState = (): TenderFormState => ({
  tenderName: "",
  tenderBid: "",
  tenderScope: "",
  tenderIssue: "",
  tenderClosing: "",
  tenderSessionDate: "",
  tenderVenue: "",
});
