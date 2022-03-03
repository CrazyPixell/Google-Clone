import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { getSearchData } from './api/searchAPI';
import Response from '../Response';
import SearchResults from '../components/SearchResults';
import { SearchResultsInterface } from '../models/Search';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';

interface SearchProps {
  results: SearchResultsInterface;
}

const Search: React.FC<SearchProps> = ({ results }): React.ReactElement => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Поиск в Goggle</title>
        <meta name='description' content='Google search clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<
  GetServerSidePropsResult<{ results: Array<SearchResultsInterface> }>
> => {
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
