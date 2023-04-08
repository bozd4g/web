import "./globals.css";

import Footer from "../components/footer";
import Header from "../components/header";
import React from "react";

const RootLayout = ({children}: {children: React.ReactNode}) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;
