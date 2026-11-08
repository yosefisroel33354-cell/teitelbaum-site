export type LanguageCode = 'ru' | 'en' | 'he';
export type EvidenceCategory = 'documented' | 'academic' | 'tradition' | 'disputed';

export interface SourceReference {
  id: string;
  title: string;
  author: string;
  date: string;
  url: string;
  category: EvidenceCategory;
  reliability: string;
  notes: Record<LanguageCode, string>;
}

export interface DynastyFigure {
  id: string;
  generation: number;
  branch: 'ujhely' | 'sighet' | 'satmar-founder' | 'satmar-unified' | 'satmar-kj' | 'satmar-wb';
  isSatmarRebbe: boolean;
  isDirectLineage: boolean;
  successionOrder: number | null;
  parentId: string | null;
  spiritualPredecessorId: string | null;
  nameRu: string;
  nameEn: string;
  nameHe: string;
  yiddishName: string;
  epithet: string;
  lifespan: string;
  birthPlace: Record<LanguageCode, string>;
  residences: Record<LanguageCode, string>;
  rabbinicPosts: Record<LanguageCode, string>;
  familyTies: Record<LanguageCode, string>;
  teachersAndDisciples: Record<LanguageCode, string>;
  works: string[];
  historicalSignificance: Record<LanguageCode, string>;
  evidenceType: EvidenceCategory;
  sources: string[];
}
