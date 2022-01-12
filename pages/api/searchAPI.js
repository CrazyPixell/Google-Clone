export const getSearchData = async (context, startIndex) => {
  try {
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context}&start=${startIndex}`;

    const encodedUrl = encodeURI(url);

    const res = await fetch(encodedUrl);

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
