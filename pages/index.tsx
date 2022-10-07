import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
	return (
		<div className="m-0 p-0 w-[100%]">
			<Head>
				<title>ArtByVansheee</title>
				<meta name="description" content="A shopping website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<h1>Hi guest!</h1>
			</Layout>
		</div>
	);
};

export default Home;
