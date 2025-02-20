import '../styles/globals.css';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;