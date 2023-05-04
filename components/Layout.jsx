import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button'
import { useRouter } from 'next/router';

export default function Layout({children}){

    const router = useRouter()

    const items = [
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

    return(
        <>
            <div className="card">
                <Menubar model={items} />
            </div>
            <div>{children}</div>
        </>
    )
}