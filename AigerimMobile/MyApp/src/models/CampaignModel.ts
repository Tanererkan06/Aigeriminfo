export interface  CampaignModel   {
  title: string;
  shortDescription: string;
  imageUrl: string;
  htmlContent: string;
  endDate: Date;
  conditions?: string[];
};
