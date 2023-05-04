import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button'

export default function Layout({children}){
    const items = [
        {
           label:'Home',
           to:'/'
        },
        {
           label:'Sobre',
        },
        {
           label:'Suporte',
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