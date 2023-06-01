import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
export default function Publication(){
    return(
        <>
            <div className="card">
                <Card>
                    <p className="m-0 flex align-items-center justify-content-center">
                        <InputText className='w-12'/>
                    </p>
                </Card>
            </div>
        </>
    )
}