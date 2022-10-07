import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Layout from "../../components/Layout";

type Props = {
	id?: number;
};

const ProductPage = (props: Props) => {
	return (
		<Layout>
			<h1>Product: {props.id}</h1>
		</Layout>
	);
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	let params: ParsedUrlQuery = context.params || {};
	let { id } = params;
	console.log(params);
	return {
		props: { id },
	};
};
