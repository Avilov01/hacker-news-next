import { getAllNews } from '@/app/actions/news';
import { Header } from '@/components/header/header';
import { NewsCardRow } from '@/components/news-card-row';

export const metadata = {
  title: 'News page',
  description: 'All news'
};

export const revalidate = 60;

export default async function Home() {
  const news = await getAllNews();

  return (
    <>
      <Header title="All News Page" />
      <main>
        <ul>
          {news?.map((item) => {
            return <NewsCardRow key={item?.id} item={item} />;
          })}
        </ul>
      </main>
    </>
  );
}
