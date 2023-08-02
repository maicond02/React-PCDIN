import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useState } from "react";
import styles from './vagas.module.css';
export default function List(){
    
    const header = (
        <div>
            <div>
                Vagas recomendadas para você!
            </div>
            <div className={styles.subTitle}>
                Com base no seu perfil e buscas.
            </div>
        </div>
    )
    const [visible, setVisible] = useState(false);
    const [vagaTitle, setvagaTitle] = useState('');
    const [vagaCompany, setVagaCompany] = useState('');
    const [vagaLocation, setVagaLocation] = useState('');

    const footerContent = (
        <div>
            <Button label="Cancelar" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Concluído" icon="pi pi-check" onClick={() => createVagas()} autoFocus />
        </div>
    );

    const [vagas, setVagas] = useState([
        {
            title:'Programador(a) Fullstack Junior (PCD) (Home office)',
            company:'PCD-IN',
            location:'Americana - SP'
        },
        {
            title:'Programador(a) Fullstack Pleno (PCD) (Home office)',
            company:'PCD-IN',
            location:'Americana - SP'
        },
        {
            title:'Programador(a) Fullstack Sênior (PCD) (Home office)',
            company:'PCD-IN',
            location:'Americana - SP'
        }
    ])

    function getVagas(){
        return vagas.map((vaga, index) =>(
                <div key={index} className='mt-4'>
                    <div className='flex flex-column'>
                        <div className={styles.vagaTitle}>
                            {vaga.title}
                        </div>
                        <div>{vaga.company}</div>
                        <div className={styles.vagaCity}>{vaga.location}</div>
                    </div>
                    {index !== vagas.length - 1 && <Divider />}
                </div>
            )
        )
    }

    function createVagas(){
        const newVaga = {
            title:vagaTitle,
            company:vagaCompany,
            location:vagaLocation
        }
        setVagas([...vagas, newVaga])
        setVisible(false)
    }
    function openDialogCreateNewVacancy(){
        setvagaTitle('');
        setVagaCompany('');
        setVagaLocation('');
        setVisible(true)
    }

    return(
        <div className='grid'>
            <div className='col-3'>
                <Card>
                    <div className='flex flex-column'>
                        <div>
                            <Button label="Vagas salvas" text icon="pi pi-bell" severity="secondary"/>
                        </div>
                        <div className='mt-2'>
                            <Button label="Alerta de vagas" text icon="pi pi-bookmark-fill" severity="secondary"/>
                        </div>
                        <div className='mt-2'>
                            <Button label="Minhas candidaturas" text icon="pi pi-file" severity="secondary"/>
                        </div>
                        <div className='flex justify-content-center mt-2'>
                            <Button label="Anunciar vaga" outlined className='w-12' onClick={() => openDialogCreateNewVacancy()} />
                            <Dialog header="Anunciar vagas" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                                <div className='flex alling-items-centet justify-content-center'>
                                    <div className='w-12'>
                                        <p>Título da vaga</p>
                                        <InputText className='w-12' value={vagaTitle} onChange={(e) => setvagaTitle(e.target.value)}/>
                                        <p>Empresa contratante</p>
                                        <InputText className='w-12' value={vagaCompany} onChange={(e) => setVagaCompany(e.target.value)} />
                                        <p>Local de trabalho</p>
                                        <InputText className='w-12' value={vagaLocation} onChange={(e) => setVagaLocation(e.target.value)}/>
                                    </div>
                                </div>
                            </Dialog>
                        </div>

                    </div>
                </Card>
            </div>
            <div className='col-9'>
                <Card title={header}>
                    {getVagas()}
                </Card>
            </div>
        </div>
    )
}