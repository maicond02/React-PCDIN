import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router';
import styles from '@/components/Layouts/layout.module.css'

export default function Layout({children, page}){

    const router = useRouter()

    let items = null;

    function selectLayout(){
        console.log(page)
        let indexLayout = [
            {
               label:'Início',
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
               label:'Início',
               command: () => router.push('/')
            },
            {
               label:'Conexões',
               command: () => router.push('/sobre')
            },
            {
               label:'Vagas',
               command: () => router.push('/suporte')
            },
            {
                label:'Mensagens',
                command: () => router.push('/suporte')
            },
            {
                label:'Notificações',
                command: () => router.push('/suporte')
            },
        ];
        if(page == '/'){
            items = indexLayout
            console.log('1')
        }else{
            items = defaultLayout
            console.log('2')
        }
    }
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