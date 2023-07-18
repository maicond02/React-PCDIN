import '@/styles/globals.css';
import Layout from '@/components/Layouts/Default';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { useRouter } from 'next/router';
import store from '../store/index'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <>
        <Provider store={store}>
          <Layout page={currentPath}>
            <div className='mt-2'>
              <Component {...pageProps} />
            </div>
          </Layout>
        </Provider>
    </>
  )
}
