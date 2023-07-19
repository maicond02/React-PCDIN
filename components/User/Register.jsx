import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import {Button } from 'primereact/button'
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image'; 
import login from '@/public/user/login.gif'

export default function Register(){

    const [userName, setUserNameValue,] = useState('');
    const [userPassword, setUserPasswordValue] = useState('');

    const router = useRouter()
    function redirectHomePage() {
        router.push('/')
      }

    function registerNewUser(){
        let userData = {
            userName:userName,
            userPassword:userPassword
        }
        console.log(userData)
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
                                    <label htmlFor="username">username</label>
                                    <InputText aria-describedby="username-help" type="text" value={userName} onChange={(e) => setUserNameValue(e.target.value)} />
                                </div>
                                <div className="flex flex-column gap-2 mt-4">
                                    <label htmlFor="username">Senha</label>
                                    <InputText type='password' value={userPassword} onChange={(e) => setUserPasswordValue(e.target.value)}/>
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
                                        <Button onClick={registerNewUser} className="w-9" label='Entre em sua conta' severity="info" text raised />
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