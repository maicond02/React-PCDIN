import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
        
export default function SideMenu(){

    return(
        <>  
            <div className="card">
                <Card>
                    <div className='flex justify-content-center'>
                        <span className='text-xl'>Gerenciar minha rede</span>
                    </div>
                    <div className='mt-2'>  
                        <div>
                            <span className='pi pi-users mr-2 text-xl text-color-secondary'></span>
                            <span className='text-xl text-color-secondary'>Conexões</span>
                        </div>
                        <div className='mt-2'>
                            <span className='pi pi-phone mr-2 text-xl text-color-secondary'></span>
                            <span className='text-xl text-color-secondary'>Contatos</span>
                        </div>
                        <div className='mt-2'>
                            <span className='pi pi-eye mr-2 text-xl text-color-secondary'></span>
                            <span className='text-xl text-color-secondary'>Seguidores</span>
                        </div>
                        <div className='mt-2'>
                            <span className='pi pi-calendar-plus mr-2 text-xl text-color-secondary'></span>
                            <span className='text-xl text-color-secondary'>Eventos</span>
                        </div>
                        <div className='mt-2'>
                            <span className='pi pi-building mr-2 text-xl text-color-secondary'></span>
                            <span className='text-xl text-color-secondary'>Pages</span>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}