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
                </Card>
            </div>
        </>
    )
}