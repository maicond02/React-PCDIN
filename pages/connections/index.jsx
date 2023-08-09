import Friends from '@/components/Connections/Friends';
import SideMenu from '@/components/Connections/SideMenu'
export default function ConnectionsPage(){
    return(
        <>
            <div className='grid'>
                <div className='col-3'>
                    <SideMenu />
                </div>
                <div className='col-9'>
                    <Friends />
                </div>
            </div>
        </>
    )
}