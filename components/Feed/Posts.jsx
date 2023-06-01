import { Card } from 'primereact/card';
import Publication from '@/components/Feed/Publication'
export default function Posts(){

    const header = (
        <div>
            teste
        </div>
    );

    return(
        <>
            <div>
                <Publication/>
            </div>
            <div className="card mt-2">
                <Card header={header}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
            </div>
        </>
    )
}