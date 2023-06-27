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

    let postagens = [
        {
            title:'Recrutamento.',
            content:'Estamos em busca de programadores web talentosos para se juntarem à nossa equipe.'
        }
    ]

    function listarPostagens(){
        let title, conteudo;
        postagens.forEach(post => {
            title = post.title
            conteudo = post.content
        })

        return (
            <>
                <div>{title}</div>
                <br/>
                <div>{conteudo}</div>
            </>

        )
    }

    return(
        <>
            <div>
                <Publication/>
            </div>
            <div className="card mt-2">
                <Card title={header} footer={footer}>
                    {listarPostagens()}
                </Card>
            </div>
        </>
    )
}