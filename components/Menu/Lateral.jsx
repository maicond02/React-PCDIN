import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup'; 

export default function Lateral(){

    const header = (
        <div className='flex flex-column align-items-center justify-content-center'>
            <Avatar label="U" size="large" className="p-overlay-badge" style={{ backgroundColor: '#4caf4f', color: '#ffffff' }} />
        </div>
    );

    return(
        <>
            <div className="card">
                <Card header={header}>
                    <div className='flex flex-column align-items-center justify-content-center'>
                        <div>
                            Admin
                        </div>
                        <div>
                            Desenvolvedor
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}