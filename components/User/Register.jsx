import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import {Button } from 'primereact/button'

import { useRouter } from 'next/router';

import Image from 'next/image'; 
import login from '@/public/user/login.gif'

export default function Register(){

    const router = useRouter()
    function redirectHomePage() {
        router.push('/')
      }

    return(
        <>
            <div className="card">
                <div>
                    <Card>
                        <div className='grid'>
                            <div className='col-8'>
                                <Image src={login} alt="Work" width={500} height={500} priority={true}/>
                            </div>
                            <div className='col-4'>
                                <div className="flex flex-column gap-2 mb-4">
                                    <h2>Entre na melhor comunidade profissional</h2>
                                </div>
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="username">E-mail ou username</label>
                                    <InputText aria-describedby="username-help" />
                                </div>
                                <div className="flex flex-column gap-2 mt-4">
                                    <label htmlFor="username">Senha</label>
                                    <InputText type='password'/>
                                </div>
                                <div className="flex flex-column gap-2 mt-4">
                                    <div>
                                        <p>Esqueceu a senha?</p>
                                    </div>
                                    <div className='flex align-items-center justify-content-center'>
                                        <Button label='Registrar-se' raised className='w-9'/>
                                    </div>
                                    <div className='flex align-items-center justify-content-center'>
                                        ou
                                    </div>
                                    <div className='flex align-items-center justify-content-center'>
                                        <Button onClick={redirectHomePage} className="w-9" label='Entre em sua conta' severity="info" text raised />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}