import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Publication from '@/components/Feed/Publication';
import { Divider } from 'primereact/divider';
import profile from '@/public/user/profile.jpg';
import Image from 'next/image';
import styles from './default.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Interactions from './Interactions'

export default function Posts(){
    const postagens = useSelector(state => state.usersData.postagens)
    const feedData = useSelector(state => state.feedData.value)

    const footer = (
        <>
            <Divider />
            <div className='flex'>
                <Button label="Curtir" icon="pi pi-thumbs-up" outlined />
                <Button onClick={showComments} className='ml-2' label="Comentar" icon="pi pi-comments" outlined />
                <Button className='ml-2' label="Compartilhar" icon="pi pi-share-alt" outlined />
            </div>
            <div className='comments-line'>
                <Interactions />
            </div>
        </>

    )

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
            return (
                <div key={index} className='mt-2'>
                    <Card title={postHeader} footer={footer}>
                        <div>{post.title}</div>
                        <br/>
                        <div>{post.content}</div>
                    </Card>
                </div>
            );
        });
    }
    
    function showComments(index){
        console.log(index)
        let commentsLine = document.getElementsByClassName('comments-line');

        for (let i = 0; i < commentsLine.length; i++) {
          if (commentsLine[i].style.display === 'none') {
            commentsLine[i].style.display = 'block';
          } else {
            commentsLine[i].style.display = 'none';
          }
        }
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