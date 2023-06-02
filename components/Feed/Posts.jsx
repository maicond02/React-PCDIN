import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Publication from '@/components/Feed/Publication';
import { Divider } from 'primereact/divider';
export default function Posts(){

    const header = (
        <div>
            teste
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
                <Card header={header} footer={footer}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
            </div>
        </>
    )
}