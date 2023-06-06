import { Card } from 'primereact/card';
//import style from '@components/User/perfil.module.css'
export default function Profile(){

    const header = (
        <div>
                        
        </div>
    )

    return (
        <div className='grid'>
            <div className='col-8'>
                <Card title={header}>
                    <div>

                    </div>
                </Card>
            </div>
            <div className='col-4'>
                <Card></Card>
            </div>
        </div>
    )
}