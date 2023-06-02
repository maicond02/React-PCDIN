import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styles from '@/components/Layouts/layout.module.css'

export default function Layout({children, page}){

    const router = useRouter()

    let items = null;
    let start = null;
    let classActive = null;

    function selectLayout(){
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
               icon:'pi pi-home',
               command: () => router.push('/')
            },
            {
               label:'Conexões',
               icon:'pi pi-users',
               command: () => router.push('/sobre')
            },
            {
               label:'Vagas',
               icon:'pi pi-briefcase',
               command: () => router.push('/suporte')
            },
            {
                label:'Mensagens',
                icon:'pi pi-envelope',
                command: () => router.push('/suporte')
            },
            {
                label:'Notificações',
                icon:'pi pi-bell',
                command: () => router.push('/suporte')
            },
        ];
        if(page == '/'){
            items = indexLayout
            classActive = styles.menubar
        }else{
            items = defaultLayout
            classActive = styles.menubarHome
            start = (
                <div>
                    <InputText placeholder='Pesquisar'/>
                </div>
            )
        }
    }
    selectLayout()

    return(
        <>
            <div className="card">
                <Menubar start={start} model={items} className={classActive}/>
            </div>
            <div>{children}</div>
        </>
    )
}