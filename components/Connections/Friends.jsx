import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
export default function Friends(){

    let listOfPeople = [
        {id:'1',name:'Maicon Alves',job:'Engenheiro de software',emComum:'10'},
        {id:'2',name:'Leonardo Marcondeli',job:'Frontend Sênior',emComum:'30'},
        {id:'3',name:'Vinicius de Morais',job:'Backend Java',emComum:'5'},
        {id:'4',name:'João Marcos',job:'Backend Node.js',emComum:'2'},
        {id:'1',name:'Maicon Alves',job:'Engenheiro de software',emComum:'10'},
        {id:'2',name:'Leonardo Marcondeli',job:'Frontend Sênior',emComum:'30'},
        {id:'3',name:'Vinicius de Morais',job:'Backend Java',emComum:'5'},
        {id:'4',name:'João Marcos',job:'Backend Node.js',emComum:'2'}
    ]

    const header = (
        <div className='flex justify-content-center'>
            <Avatar label="V" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
        </div>
    )

    const footer = (
        <div className='mt-2 flex justify-content-center'>
            <Button label='Conectar' outlined rounded icon='pi pi-user-plus'/>
        </div>
    )

    function loadPeopleList(){
        return listOfPeople.map((data, index) =>(
            <div key={index} className='col-3'>
                <Card footer={footer} title={header}>
                    <div>
                        <div className='flex justify-content-center'>
                            <span>{data.name}</span>
                        </div>
                        <div className='flex justify-content-center'>
                            <span>{data.job}</span>
                        </div>
                        <div className='flex justify-content-center'>
                        <span>{data.emComum} </span> <span className='ml-2'>Conexões em comum</span> 
                        </div>
                    </div>
                </Card>
            </div>
        ))
    }

    return(
        <>  
            <div className="card">
                <Card>
                    <div className='flex justify-content-center'>
                        <span className='text-xl ml-2'>Pessoas que você talvez conheça</span>
                    </div>
                    <div className='mt-4 grid'>
                        {loadPeopleList()}
                    </div>
                </Card>
            </div>
        </>
    )
}