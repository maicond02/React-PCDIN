import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import profile from '@/public/user/profile.jpg';
import Image from 'next/image';
import styles from './lateral.module.css';

export default function Lateral(){

    const header = (
        <div className='flex flex-column align-items-center justify-content-center'>
            <div className={styles.container}>
                <Image src={profile} className={styles.profileImage}/>
            </div>
        </div>
    );

    return(
        <>
            <div className="card">
                <Card header={header}>
                    <div className='flex flex-column align-items-center justify-content-center'>
                        <div className={styles.name}>
                            Maicon Alves
                        </div>
                        <div className={styles.subTitle}>
                            Web developer Sênior
                        </div>
                        <Divider />
                    </div>
                    <div className='flex flex-column'>
                        <span>Vizualizações no perfil: <span className='text-primary'>10</span></span>
                        <span>Vizualizações nas publicações: <span className='text-primary'>200</span></span>
                    </div>
                </Card>
                <div className='mt-2'>
                    <Card>
                        <div className='flex flex-column'>
                            <div className='flex flex-column'>
                                <span className='text-primary'>Grupos</span>
                                <span className='mt-2 text-primary'>Eventos</span>
                                <span className='mt-2 text-primary'>Hashtags</span>
                            </div>
                            <Divider />
                            <div>
                                <span>Descubra mais</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}