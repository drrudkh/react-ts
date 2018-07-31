export interface IProductDetailsProps {
  data: {
    _id: number;
    author: string;
    country: string;
    language: string;
    pages: number;
    title: string;
    year: number;
  };
  onAddToCart?: () => void;
  onToggleModal?: () => void;
}
