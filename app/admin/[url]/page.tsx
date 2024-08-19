'use client';

import React, { useEffect, useState } from 'react';
import { AlunosBoard, EscolaBoard, OfertasBoard, PanelBoard, ServiceBoard } from '@/components/admin/dashboard';
import Header from "@/components/admin/header";
// import Footer from "@/components/maisAlunos/footer/page";
import "@/app/globals.css";
import { getUserRole } from '@/utils/localstorage';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Footer from '@/components/footer/page';
// import { useRouter } from 'next/router';

const Page = (url: any) => {
    const router = useRouter();

    const decode_url = decodeURIComponent(url.params.url);
    let activeTab = 0;
    let showDashboard;
    switch (decode_url) {
        case 'Panel do Gestor':
            activeTab = 1;
            showDashboard = <PanelBoard title={decode_url} key={1} />;
            break;
        case 'Minha Escola':
            activeTab = 2;
            showDashboard = <EscolaBoard title={decode_url} key={1} />;
            break;
        case 'Minhas Ofertas':
            activeTab = 3;
            showDashboard = <OfertasBoard title={decode_url} key={1} />;
            break;
        case 'Meus Alunos':
            activeTab = 4;
            showDashboard = <AlunosBoard title={decode_url} key={1} />;
            break;
        case 'Servios':
            activeTab = 5;
            showDashboard = <ServiceBoard title={decode_url} key={1} />;
            break;
    }

    useEffect(() => {
        let userRole = getUserRole();
        if(userRole === 'customer') {
            toast.error('Usuário não autorizado');
            router.push('/')
        }
    }, [])



    return (
        <>
            <Header activeTab={activeTab} />
            <div className="flex flex-col bg-gray-200">
                {showDashboard}
            </div>
            <Footer/>
            {/* <Footer /> */}
        </>
    )
}

export default Page;