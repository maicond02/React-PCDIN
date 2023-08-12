
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


export default function TemplateDemo() {
        const events = [
        { status: 'Objetivo', content: 'teste', date: '15/10/2020 10:30', icon: 'pi pi-bolt', color: '#007bff', image: 'game-controller.jpg' },
        { status: 'Metodos', content: 'teste2', date: '15/10/2020 14:00', icon: 'pi pi-compass', color: '#007bff' },
        { status: 'Relatar erro', content: 'teste3', date: '15/10/2020 16:15', icon: 'pi pi-megaphone', color: '#007bff' },
        { status: 'Contato', content: 'teste4', date: '16/10/2020 10:00', icon: 'pi pi-comments', color: '#007bff' }
    ];

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} width={200} className="shadow-1" />}
                <p>{item.content}</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };
        
    return (
        <div className="card">
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}
        