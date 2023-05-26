import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router';
import styles from '@/components/Layouts/layout.module.css'

export default function Layout({children, page}){

    const router = useRouter()

    let items = null;

    function selectLayout(page){
        let indexLayout = [
            {
               label:'Home',
               command: () => router.push('/')
            },
            {
               label:'Sobre',
               command: () => router.push('/sobre')
            },
            {
               label:'Suporte',
               command: () => router.push('/suporte')
            },
        ];
        let defaultLayout = [
            {
               label:'Home1',
               command: () => router.push('/')
            },
            {
               label:'Sobre1',
               command: () => router.push('/sobre')
            },
            {
               label:'Suporte1',
               command: () => router.push('/suporte')
            },
        ];
        switch(page){
            case 'index':
                items = indexLayout
                console.log('foi')
                break;
            default:
                items = defaultLayout
        }
    }
    console.log(page)
    selectLayout()
    

    return(
        <>
            <div className="card">
                <Menubar model={items} className={styles.menubar}/>
            </div>
            <div>{children}</div>
        </>
    )
}