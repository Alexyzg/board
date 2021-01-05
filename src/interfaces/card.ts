export interface Card {
  title: string | undefined;
  description: string | undefined;
  id: string;
}

export interface CardsMap {
  [id: string]: Card
}
