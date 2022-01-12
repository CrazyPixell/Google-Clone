import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { getSearchData } from '../pages/api/searchAPI';
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

  const res = await getSearchData(context.query.term, startIndex);

  const data = useDummyData ? Response : res;

  return {
    props: {
      results: data,
    },
  };
};
