import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export default function Posts(){

    return(
        <>
            <div className='mt-3'>
                <InputText className='w-6'/>
                <Button className='ml-2' label='Comentar'/>
            </div>
        </>
    )
}