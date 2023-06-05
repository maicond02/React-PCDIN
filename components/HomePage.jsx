import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import {Button } from 'primereact/button'
import style from '@/styles/HomePage.module.css';
import workImage from '@/public/home/workPCD.gif';
import Image from 'next/image'; 
import { useRouter } from 'next/router';
import Link from "next/link";
import Layout from "@/components/Layouts/Default"
import React, { useEffect, useState } from 'react';

export default function HomePage(){

    const router = useRouter()
    function redirectRegisterPage() {
        router.push('/user/register')
    }
    
    return(
        <>
            <div className="card">
                <div>
                    <Card>
                        <div className='grid'>
                            <div className='col-12 md:col-8'>
                                <div className='flex'>
                                    <Image src={workImage} alt="Work" width={600} height={600} className={style.image}/>
                                </div>
                            </div>
                            <div className='col-12 md:col-4'>
                                <div className="flex flex-column gap-2 mb-4">
                                    <h2>Entre na melhor comunidade profissional</h2>
                                </div>
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="username">E-mail ou username</label>
                                    <InputText id="username" aria-describedby="username-help" />
                                </div>
                                <div className="flex flex-column gap-2 mt-4">
                                    <label htmlFor="username">Senha</label>
                                    <InputText id="username" aria-describedby="username-help" type='password'/>
                                </div>
                                <div className="flex flex-column gap-2 mt-4">
                                    <div>
                                        <p>Esqueceu a senha?</p>
                                    </div>
                                    <Link href="/home">
                                        <div className='flex align-items-center justify-content-center'>
                                            <Button label='Entrar' raised className='w-9'/>
                                        </div>
                                    </Link>
                                    <div className='flex align-items-center justify-content-center'>
                                        ou
                                    </div>
                                    <div className='flex align-items-center justify-content-center'>
                                        <Button onClick={redirectRegisterPage} className="w-9" label='Registrar-se' severity="info" text raised />
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