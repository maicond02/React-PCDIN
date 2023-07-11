import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Image from 'next/image';
import corp from '@/public/home/companie.png'
export default function MoreContent(){
    return(
        <div>
            <div>
                <Card className='bg-blue-50'>
                    <div className='grid'>
                        <div className='col-6 flex justify-content-center'>
                            <div>
                                <span className='text-5xl text-600'>encontre o</span><br />
                                <span className='text-5xl text-600'>estágio ou emprego</span><br />
                                <span className='text-5xl text-600'>certo para você.</span>
                            </div>
                        </div>
                        <div className='col-6 flex justify-content-center'>
                            <div>
                                <p className='text-5xl text-600'>Sugestões de pesquisa</p>
                                <div>
                                    <Button label='Engenharia' className='ml-2 mb-2' severity="secondary" text raised />
                                    <Button label='Programação' className='ml-2 mb-2' severity="secondary" text raised />
                                    <Button label='Adiministração' className='ml-2 mb-2' severity="secondary" text raised />
                                    <Button label='Financeiro' className='ml-2 mb-2' severity="secondary" text raised />
                                    <Button label='Engenharia' className='ml-2 mb-2' severity="secondary" text raised />
                                    <Button label='Programação' className='ml-2 mb-2' severity="secondary" text raised />
                                    <Button label='Adiministração' className='ml-2 mb-2' severity="secondary" text raised />
                                    <Button label='Financeiro' className='ml-2 mb-2' severity="secondary" text raised />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className='bg-blue-100 mt-2'>
                    <div className='grid'>
                        <div className='col-6 flex justify-content-center'>
                            <div>
                                <span className='text-5xl text-800'>Anuncie sua vaga</span><br />
                                <span className='text-5xl text-800'>e encontre milhões</span><br />
                                <span className='text-5xl text-800'>de candidatos!</span>
                            </div>
                        </div>
                        <div className='col-6 flex justify-content-center'>
                            <div>
                                <Card className='bg-blue-200'>
                                    <p className='text-5xl text-800'>Anuncie já!</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className='bg-blue-50 mt-2'>
                    <div>
                        <div className='grid'>
                            <div className='flex justify-content-center col-12'>
                                <span className='text-5xl text-800'>Conecte-se com pessoas ao redor do mundo, amigos de trabalho e de classe no PCD-IN</span>
                            </div>
                            <div className='col-12'>
                                <Image src={corp} className='img-corp'/>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}