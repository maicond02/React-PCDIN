import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styles from './vagas.module.css';
import { Divider } from 'primereact/divider';
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
                            <Button label="Anunciar vaga" outlined className='w-12'/>
                        </div>

                    </div>
                </Card>
            </div>
            <div className='col-7'>
                <Card title={header}>
                    <div className='flex flex-column'>
                        <div className='mt-4'>
                            <div className='flex flex-column'>
                                <div className={styles.vagaTitle}>
                                    Programador(a) Fullstack Sênior (PCD) (Presencial)
                                </div>
                                <div>PCD-IN</div>
                                <div className={styles.vagaCity}>Americana - SP</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <div className='flex flex-column'>
                                <div className={styles.vagaTitle}>
                                    Programador(a) backend Pleno (PCD) (Híbrido)
                                </div>
                                <div>PCD-IN</div>
                                <div className={styles.vagaCity}>Americana - SP</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <div className='flex flex-column'>
                                <div className={styles.vagaTitle}>
                                    Programador(a) Fullstack Sênior (PCD) (Presencial)
                                </div>
                                <div>PCD-IN</div>
                                <div className={styles.vagaCity}>Americana - SP</div>
                            </div>
                        </div>
                        <Divider />
                    </div>
                </Card>
            </div>
            <div className='col-2'>
                <Card title={header}>
                    <div>

                    </div>
                </Card>
            </div>
        </div>
    )
}