import { Box } from "@mui/system";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
	children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<Box className="bg-[#242424] text-[#F7AB0A]/90">
			<Navbar />
			<div className="">{children}</div>
			<Footer />
		</Box>
	);
};

export default Layout;
