import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="main-container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
