import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Publication from '@/components/Feed/Publication';
import { Divider } from 'primereact/divider';
import Image from 'next/image';
import styles from './default.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Interactions from './Interactions';
import { useState } from 'react';

export default function Posts(){
    const postagens = useSelector(state => state.usersData.postagens)
    let [likeCounter, setLikeCounter] = useState(0);
    function listPosts(){
        return postagens.map((post, index) => {
            let postHeader = (
                <div className='flex' key={index}>
                    <div className={styles.container}>
                        <Image src={post.userPic} className={styles.profileImage} width={200} height={200} alt='profile-pic'/>
                    </div>
                    <div className='flex flex-column mt-3 ml-2'>
                        <div className={styles.creatorPost}>
                            {post.userName}
                        </div>
                        <div className={styles.creatorSubPost}>
                            {post.userBio}
                        </div>
                    </div>
                </div>
            );
            let postFooter =(
                <>
                    <Divider />
                    <div>
                        <div className={styles.countersContainer}>
                            <span className={styles.counters}>Curtidas: {likeCounter}</span>
                            <span className={styles.counters}>Comentarios: {likeCounter}</span>
                            <span>Compartilhamentos: {likeCounter}</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <Button onClick={() => showLikes()} label="Curtir" icon="pi pi-thumbs-up" outlined />
                        <Button onClick={() => showComments(index)} className='ml-2' label="Comentar" icon="pi pi-comments" outlined />
                        <Button className='ml-2' label="Compartilhar" icon="pi pi-share-alt" outlined />
                    </div>
                    <div className='comments'>
                        <Interactions />
                    </div>
                </>
            );
            return (
                <div key={index} className='mt-2'>
                    <Card title={postHeader} footer={postFooter}>
                        <div>{post.title}</div>
                        <br/>
                        <div>{post.content}</div>
                    </Card>
                </div>
            );
        });
    }
    
    function showComments(index){
        let commentsLine = document.getElementsByClassName('comments');
        if(commentsLine[index].style.display == 'none'){
            commentsLine[index].style.display = 'block';
        }else{
            commentsLine[index].style.display = 'none';
        }
    }

    function showLikes(){
        setLikeCounter(likeCounter + 1);
    }

    return(
        <>
            <div>
                <Publication/>
            </div>
            <div>
                {listPosts()}
            </div>
        </>
    )
}