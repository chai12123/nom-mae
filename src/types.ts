export type ViewState = 'home' | 'articles' | 'article_detail' | 'about';

export interface Article {
  id: string;
  number: number;
  title: string;
  teaser: string;
  icon: string;
  body: string;
}
