import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import curiosity from '../../public/about/curiosity.gif'
import Image from 'next/image';
import Scope from '../../public/about/Scope.gif'


export default function TemplateDemo() {
        const events = [
        { status: 'Objetivo', content: 'O objetivo deste projeto é construir um modelo unificado de trabalho, o PCD-IN. Visando compreender e auxiliar o acesso de PcD ao mercado de trabalho, unificando as oportunidades de emprego fornecidas especialmente para deficientes auditivos  visuais, físicos, mentais/intelectuais ou com limitações múltiplas, e apresentar tais oportunidades de trabalho e desenvolvimento profissional de maneira intuitiva e organizada.', date: '15/10/2020 10:30', icon: 'pi pi-bolt', color: '#007bff', image: 'game-controller.jpg' },
        { status: 'Metodos', content: 'Visando compreender e auxiliar o acesso de PcD ao mercado de trabalho, tendo como foco a criação de uma plataforma em formato de site web (World Wide Web) e aplicativo mobile, que unifica as oportunidades de emprego fornecidas especialmente para PCDs', date: '15/10/2020 14:00', icon: 'pi pi-compass', color: '#007bff' },
        { status: 'Relatar erro', content: 'Para relatar um erro para nosso time, Clicke aqui', date: '15/10/2020 16:15', icon: 'pi pi-megaphone', color: '#007bff' },
        { status: 'Contato', content: 'Entre em contato conosco pela pagina suporte, Clicke aqui', date: '16/10/2020 10:00', icon: 'pi pi-comments', color: '#007bff' }
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
                {item.image && <Image src={Scope} alt="teste" width={180} height={150}/>}
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
        