import { Card } from 'primereact/card';

export default function Friends(){

    let listOfPeople = [
        {id:'1',name:'Maicon Alves',job:'Engenheiro de software'},
        {id:'1',name:'Maicon Alves',job:'Engenheiro de software'},
        {id:'1',name:'Maicon Alves',job:'Engenheiro de software'},
        {id:'1',name:'Maicon Alves',job:'Engenheiro de software'}
    ]

    function loadPeopleList(){
        return listOfPeople.map((data, index) =>(
            <div key={index} className='col-3'>
                <Card>
                    <div>
                        <div>
                            <span>{data.name}</span>
                        </div>
                        <div>
                            <span>{data.job}</span>
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
                        <span>Pessoas que você talvez conheça</span>
                    </div>
                    <div className='mt-4 grid'>
                        {loadPeopleList()}
                    </div>
                </Card>
            </div>
        </>
    )
}