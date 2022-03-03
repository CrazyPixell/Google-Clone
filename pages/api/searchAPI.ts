import { SearchResultsInterface } from '../../models/Search';

export const getSearchData = async (
  context: string | Array<string>,
  startIndex: string | Array<string>
): Promise<any> => {
  try {
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context}&start=${startIndex}`;

    const encodedUrl = encodeURI(url);

    const res = await fetch(encodedUrl);

    const data: SearchResultsInterface = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
