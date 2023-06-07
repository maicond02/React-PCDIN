import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Publication from '@/components/Feed/Publication';
import { Divider } from 'primereact/divider';
import profile from '@/public/user/profile.jpg';
import Image from 'next/image';
import styles from './default.module.css'
export default function Posts(){

    const header = (
        <div className='flex'>
            <div className={styles.container}>
                <Image src={profile} className={styles.profileImage}/>
            </div>
            <div className='flex flex-column mt-3 ml-2'>
                <div className={styles.creatorPost}>
                    Maicon Alves
                </div>
                <div className={styles.creatorSubPost}>
                    Web developer Sênior
                </div>
            </div>
        </div>
    );
    const footer = (
        <>
            <Divider />
            <div className='flex'>
                <Button label="Curtir" icon="pi pi-thumbs-up" outlined />
                <Button className='ml-2' label="Comentar" icon="pi pi-comments" outlined />
                <Button className='ml-2' label="Compartilhar" icon="pi pi-share-alt" outlined />
            </div>
        </>

    )

    return(
        <>
            <div>
                <Publication/>
            </div>
            <div className="card mt-2">
                <Card title={header} footer={footer}>
                    <p>
                        Recrutamento: Programadores Web level Junior (PCDS)!
                    </p>
                    <p className="m-0">
                    Estamos em busca de programadores web talentosos para se juntarem à nossa equipe. Se você é apaixonado por desenvolvimento web e deseja trabalhar em projetos empolgantes, essa é a sua oportunidade!
                    Se você está pronto para fazer parte de uma equipe dinâmica e contribuir para o desenvolvimento de soluções web de alta qualidade, envie seu currículo e portfólio para [INSERIR ENDEREÇO DE E-MAIL]. Aguardamos ansiosamente sua inscrição!
                    Observação: Encorajamos candidaturas de pessoas de todos os gêneros, raças, origens étnicas e orientações sexuais. Valorizamos a diversidade e a inclusão em nosso ambiente de trabalho.
                    </p>
                </Card>
            </div>
        </>
    )
}