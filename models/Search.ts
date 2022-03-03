interface Result {
  cacheId: string;
  displayLink: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  htmlSnippet: string;
  htmlTitle: string;
  kind: string;
  link: string;
  pagemap: {
    cse_image: Array<{ src: string }>;
    cse_thumbnail: Array<{ height: string; src: string; width: string }>;
    metatags: Array<{
      'format-detection': string;
      'og:title': string;
      'og:type': string;
      referrer: string;
    }>;
  };
  snippet: string;
  title: string;
}

interface Query {
  count: number;
  cx: string;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  searchTerms: string;
  startIndex: number;
  title: string;
  totalResults: string;
}

export interface SearchResultsInterface {
  context: { title: string };
  items: Array<Result>;
  kind: string;
  queries: {
    nextPage: Array<Query>;
    request: Array<Query>;
  };
  searchInformation: {
    formattedSearchTime: string;
    formattedTotalResults: string;
    searchTime: number;
    totalResults: string;
  };
  url: {
    template: string;
    type: string;
  };
}
