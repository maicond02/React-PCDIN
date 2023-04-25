import Navbar from "./Navbar"
import { Menubar } from 'primereact/menubar';

export default function Layout({children}){
    const items = [
        {
           label:'Home',
           to:'/'
        },
        {
           label:'Aulas',
        },
        {
           label:'Métodos',
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