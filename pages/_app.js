import '@/styles/globals.css'
import Layout from '@/components/Layout'
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className='mt-2'>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
