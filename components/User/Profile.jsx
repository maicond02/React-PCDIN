import { Card } from 'primereact/card';
import styles from '../User/perfil.module.css';
import { Avatar } from 'primereact/avatar';
import Image from 'next/image';
import banner from '@/public/user/banner.jpg';
import profile from '@/public/user/profile.jpg'
export default function Profile(){

    const header = (
        <div>
            <div className={styles.container}>
                <Image src={banner}/>
            </div>
            <div className={styles.profile}>
                <Image src={profile} className={styles.profileImage}/>
            </div>  
        </div>
    )

    return (
        <div className='grid'>
            <div className='col-8'>
                <Card title={header}>
                    <div>
                        <div className='flex flex-column mt-6 ml-6'>
                            <p className={styles.userData}>
                                Maicon Alves
                            </p>
                            <p className={styles.userSubtitle}>
                                Engenherio de Software | Javascript | React | React Native | Nodejs
                            </p>
                            <p className={styles.userLocation}>
                                Nova Odessa - SP | Brasil
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className='col-4'>
                <Card></Card>
            </div>
        </div>
    )
}