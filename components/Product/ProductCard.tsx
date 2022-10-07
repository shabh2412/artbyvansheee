import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { productType } from "../../sampleData";

type Props = productType;

const ProductCard = ({ name, img, id, price, qty }: Props) => {
	return (
		<Box id={id.toString()} className="border p-3 flex flex-col items-center">
			<Box>
				<img src={img} />
			</Box>
			<Box className="border">
				<h1>{name}</h1>
			</Box>
		</Box>
	);
};

export default ProductCard;
