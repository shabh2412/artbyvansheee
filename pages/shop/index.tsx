import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { config } from "../../config";
import { productsArray } from "../../sampleData";
import ProductCard from "../../components/Product/ProductCard";
import { Box } from "@mui/material";

type Props = {
	data: productsArray;
};
const { baseApiUrl } = config;

const ShopHome = ({ data }: Props) => {
	return (
		<Layout>
			<Head>
				<title>ArtByVanshee - All Artworks</title>
			</Head>
			<Box className="max-w-7xl mx-auto">
				<h3 className="text-xl m-2">{data.length} Items</h3>
				<Box className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
					{data.map((item) => (
						<ProductCard
							key={item.id}
							name={item.name}
							img={item.img}
							price={item.price}
							qty={item.qty}
							id={item.id}
						/>
					))}
				</Box>
			</Box>
		</Layout>
	);
};

export default ShopHome;

export const getServerSideProps: GetServerSideProps = async () => {
	// fetching data from backend.
	const response = await axios.get<productsArray>(`${baseApiUrl}/products/all`);
	const data: productsArray = response.data;

	return {
		props: {
			data,
		},
	};
};
