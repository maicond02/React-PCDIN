import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export default function Publication(){

    function openPublication(){
        console.log('oi')
    }

    return(
        <>
            <div className="card">
                <Card>
                    <div className="m-0 flex flex-column">
                        <div className='cursor-pointer'>
                            <InputText onClick={openPublication} placeholder='Escreva sua publicação' className='w-12' disabled />
                        </div>
                        <div className='mt-2'>
                            <Button label="Imagem" icon='pi pi-image' text raised />
                            <Button className='ml-2' label="Vídeo" icon='pi pi-video' text raised />
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}