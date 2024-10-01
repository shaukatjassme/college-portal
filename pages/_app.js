import { useRouter } from 'next/router';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  // Check if the current page is the index page ('/')
  const isIndexPage = router.pathname === '/';

  return (
    <>
      <Navbar />
      {/* Conditionally render the layout, only if it's not the index page */}
      {isIndexPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <Footer />
    </>
  );
}

export default MyApp;
