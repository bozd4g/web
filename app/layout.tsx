import './globals.css'
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const RootLayout = ({children}: { children: React.ReactNode }) => (
    <html lang="en">
    <Header/>
    <body>{children}</body>
    <Footer/>
    </html>
)

export default RootLayout;