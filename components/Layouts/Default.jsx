import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router';
import styles from '@/components/Layouts/layout.module.css'

export default function Layout({children, page}){

    const router = useRouter()

    let items = null;
    let classActive = null;

    function selectLayout(){
        let indexLayout = [
            {
               label:'Início',
               icon:'pi pi-fw pi-home',
               command: () => router.push('/')
            },
            {
               label:'Sobre',
               icon:'pi pi-fw pi-info-circle',
               command: () => router.push('/about')
            },
            {
               label:'Suporte',
               icon:'pi pi-fw pi-wrench',
               command: () => router.push('/suporte')
            },
        ];
        let defaultLayout = [
            {
               label:'Início',
               icon:'pi pi-home',
               command: () => router.push('/home')
            },
            {
               label:'Conexões',
               icon:'pi pi-users',
               command: () => router.push('/connections')
            },
            {
               label:'Vagas',
               icon:'pi pi-briefcase',
               command: () => router.push('/vagas')
            },
            {
                label:'Mensagens',
                icon:'pi pi-envelope',
                command: () => router.push('/messages')
            },
            {
                label:'Notificações',
                icon:'pi pi-bell',
                command: () => router.push('/suporte')
            },
            {
                label:'Usuário',
                icon:'pi pi-user',
                command: () => router.push('/profile')
            },
        ];
        if(page == '/' || page == '/user/register' || page=='/about'){
            items = indexLayout
        }else{
            items = defaultLayout
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