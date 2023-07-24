import { Layout } from '@/components/ui';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <div>Home</div>;
};

/**
 * * To apply the next layout we created we first need to apply the return type to the page as you can see the above.
 * * Next step is to call the getLayout prop and wrap our page with the custom layout component that we created.
 * * Learn More: https://nextjs.org/docs/basic-features/layouts
 */
Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
