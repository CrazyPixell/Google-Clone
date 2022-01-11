import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from '../keys';
import Response from '../Response';
import SearchResults from '../components/SearchResults';

const Search = ({ results }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Поиск в Goggle</title>
        <meta name='description' content='Google search clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps = async context => {
  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`;

  const encodedUri = encodeURI(url);

  const res = await fetch(encodedUri);

  const data = useDummyData ? Response : await res.json();

  return {
    props: {
      results: data,
    },
  };
};
