import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import { InputTextarea } from 'primereact/inputtextarea';
export default function Publication(){

    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    function openPublication(){
        console.log('oi')
    }

    let publications = [
        {
            
        }
    ]

    function savePublicationData(){

    }

    return(
        <>
            <div className="card">
                <Card>
                    <div className="m-0 flex flex-column">
                        <div className='cursor-pointer' onClick={() => setVisible(true)}>
                            <InputText onClick={openPublication} placeholder='Escreva sua publicação' className='w-12' disabled />
                        </div>
                        <div className='mt-2'>
                            <Button label="Imagem" icon='pi pi-image' text raised />
                            <Button className='ml-2' label="Vídeo" icon='pi pi-video' text raised/>
                        </div>
                        <Dialog header="Escreva sua publicação" visible={visible} className='w-10 sm:w-8 h-28rem sm:h-28rem' onHide={() => setVisible(false)}>
                                <div className='grid'>
                                    <div className='w-12 h-16rem'>
                                        <InputTextarea className='w-12 h-16rem' value={value} onChange={(e) => setValue(e.target.value)}/>
                                    </div>

                                    <div className='w-12 mt-2'>
                                        <Button className='w-12' label="Fazer publicação" text raised/>
                                        <Button className='w-12 mt-2' label="Cancelar" text raised onClick={() => setVisible(false)}/>
                                    </div>
                                </div>
                        </Dialog>
                    </div>
                </Card>
            </div>
        </>
    )
}