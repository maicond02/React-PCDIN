import { Card } from "primereact/card"
import { InputText } from "primereact/inputtext"
import { Divider } from 'primereact/divider';
import { TabView, TabPanel } from 'primereact/tabview';
import { ScrollPanel } from 'primereact/scrollpanel';
        
export default function SideMenuMessages(){

    let header = (
        <div>
            <div className="flex justify-content-center">
                <span>Messages</span>
            </div>
            <div>

            </div>
            <Divider />
        </div>

    )
    let messagesHeader = (
        <div>
            <div className="flex flex-column pt-4 pl-4">
                <span className="text-600">User name</span>
                <span className="text-xs text-green-400">Online</span>
            </div>
            <div>

            </div>
            <Divider />
        </div>
    )

    return(
        <>
            <div className="grid">
                <div className="col-2">
                    <Card header={header}>
                        <div className="flex flex-column">
                            <div className="flex justify-content-center">
                                <InputText />
                            </div>
                            <div className="card mt-4">

                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-10">
                    <Card header={messagesHeader}>
                        <div className="flex flex-column">
                            <div className="flex justify-content-center">
                                <InputText />
                            </div>
                            <div className="card mt-4">

                            </div>
                        </div>
                        </Card>
                </div>
            </div>
        </>
    )
}