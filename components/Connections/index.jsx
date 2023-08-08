import { Card } from 'primereact/card';

export default function Connections(){

    return(
        <>  
            <div className='grid'>
                <div className="card col-3">
                    <Card></Card>
                </div>
                <div className="card col-9">
                    <Card></Card>
                </div>
            </div>
        </>
    )
}