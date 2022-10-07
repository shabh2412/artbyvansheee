import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<nav className="flex justify-between items-center mb-4 px-5 py-4 bg-[#101010]">
			<Link href="/" passHref>
				<h3 className="text-2xl hover:cursor-pointer hover:underline hover:animate-pulse">
					ArtByVanshee
				</h3>
			</Link>

			<div className="flex flex-row justify-center gap-5">
				<Link href="/shop" passHref>
					<h4 className="cursor-pointer hover:text-white transition-colors duration-500 hover:underline">
						Shop
					</h4>
				</Link>
				<Link href="/shop" passHref>
					<h4 className="cursor-pointer hover:text-white transition-colors duration-500 hover:underline">
						Categories
					</h4>
				</Link>
				{/* <Link href="/shop" passHref>
					<h4 className="cursor-pointer hover:text-white transition-colors duration-500 hover:underline">
						Donate
					</h4>
				</Link> */}
				<Link href="/shop" passHref>
					<h4 className="cursor-pointer hover:text-white transition-colors duration-500 hover:underline">
						Login/Signup
					</h4>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
