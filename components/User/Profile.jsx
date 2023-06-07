import { Card } from 'primereact/card';
import styles from '../User/perfil.module.css';
import Image from 'next/image';
import banner from '@/public/user/banner.jpg';
import profile from '@/public/user/profile.jpg';
import { Button } from 'primereact/button';
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
    const about = (
        <div>
            Sobre
        </div>
    )
    
    const PreviewNotification = (
        <div>
            Prévia das Notificações
        </div>
    )
    const PreviewVagas = (
        <div>
            Alerta de vagas
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
                                Web developer Sênior | Javascript | React | React Native | Nodejs
                            </p>
                            <p className={styles.userLocation}>
                                Nova Odessa - SP | Brasil
                            </p>
                        </div>
                    </div>
                </Card>
                <div className='mt-2'>
                    <Card title={about}>
                        <div>
                            Engenherio de Software Sênior na empresa PCDIN, atuando com recrutamento com foco em pessoas (PCDS), no meu dia a dia lido com diverso temas, desde programações, até o recrutamento de novos talentos.
                        </div>
                    </Card>
                </div>
            </div>
            <div className='col-4'>
                <div>
                    <Card title={PreviewNotification}>
                        <div className='flex align-items-center'>
                            <div>
                                <Button icon='pi pi-thumbs-up' size="small" outlined />
                            </div>
                            <div className='ml-2'>
                                <p>João Marcos</p>
                            </div>
                        </div>
                        <div className='flex align-items-center'> 
                            <div>
                                <Button icon='pi pi-thumbs-up' size="small" outlined />
                            </div>
                            <div className='ml-2'>
                                <p>Vinícius de Morais</p>
                            </div>
                        </div>
                        <div className='flex align-items-center align-items-center'>
                            <div>
                                <Button icon='pi pi-comments' size="small" outlined />
                            </div>
                            <div className='ml-2'>
                                <p>Leonardo Marcondeli</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='mt-2'>
                    <Card title={PreviewVagas}>
                        <div className='flex align-items-center'>
                            <div>
                                <Button icon='pi pi-shopping-bag' size="small" outlined />
                            </div>
                            <div className='ml-2'>
                                <p>PCDIN - Desenvolvedor Frontend</p>
                            </div>
                        </div>
                        <div className='flex align-items-center'> 
                            <div>
                                <Button icon='pi pi-shopping-bag' size="small" outlined />
                            </div>
                            <div className='ml-2'>
                            <p>PCDIN - Desenvolvedor Backend</p>
                            </div>
                        </div>
                        <div className='flex align-items-center align-items-center'>
                            <div>
                                <Button icon='pi pi-shopping-bag' size="small" outlined />
                            </div>
                            <div className='ml-2'>
                                <p>PCDIN - Desenvolvedor Fullstack</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}