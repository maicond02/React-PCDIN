import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import {Button } from 'primereact/button'
import style from '@/styles/HomePage.module.css';
import workImage from '@/public/home/workPCD.gif';
import Image from 'next/image'; 
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import MoreContent from './Home/MoreContent';

export default function HomePage(){

    const userData = useSelector(state => state.usersData.profileData)

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const router = useRouter()
    function redirectRegisterPage() {
        router.push('/user/register')
    }

    function userVerifications(){
        //if(userName == userData[0].userName){
            router.push('/home')
        //}else{
            
        //}
    }
    
    return(
        <>
            <div className="card">
                <div>
                    <Card>
                        <div className='grid'>
                            <div className='flex justify-content-center col-12 md:col-8'>
                                <div className='flex'>
                                    <Image src={workImage} alt="Work" className={style.image}/>
                                </div>
                            </div>
                            <div className='flex justify-content-center col-12 md:col-4'>
                                <div>
                                    <div className="flex flex-column gap-2 mb-4">
                                        <h2>Entre na melhor comunidade profissional</h2>
                                    </div>
                                    <div className="flex flex-column gap-2">
                                        <label htmlFor="username">E-mail ou username</label>
                                        <InputText value={userName} onChange={(e) => setUserName(e.target.value)} id="username" aria-describedby="username-help" />
                                    </div>
                                    <div className="flex flex-column gap-2 mt-4">
                                        <label htmlFor="username">Senha</label>
                                        <InputText value={userPassword} onChange={(e) => setUserPassword(e.target.value)} id="username" aria-describedby="username-help" type='password'/>
                                    </div>
                                    <div className="flex flex-column gap-2 mt-4">
                                        <div>
                                            <p>Esqueceu a senha?</p>
                                        </div>
                                            <div className='flex align-items-center justify-content-center'>
                                                <Button onClick={userVerifications} label='Entrar' raised className='w-9'/>
                                            </div>
                                        <div className='flex align-items-center justify-content-center'>
                                            ou
                                        </div>
                                        <div className='flex align-items-center justify-content-center'>
                                            <Button onClick={redirectRegisterPage} className="w-9" label='Registrar-se' severity="info" text raised />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="mt-2">
                <MoreContent />
            </div>
        </>
    )
}