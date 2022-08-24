import React from "react";
import "./navbar.css";
import { CgDetailsMore } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsChevronCompactDown } from "react-icons/bs";
import Avataar1 from "../../assets/profile-pic-01.jpg";

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-left">
				<icon className="">
					<CgDetailsMore />
				</icon>
				<div className="nav-search">
					<icon className="">
						<AiOutlineSearch />
					</icon>
					<p>Search transactions, invoices or help</p>
				</div>
			</div>
			<div className="navbar-right">
				<icon className="">
					<IoIosNotificationsOutline />
				</icon>
				<div className="nav-user-options">
					<p>John Doe</p>
					<icon className="">
						<BsChevronCompactDown />
					</icon>
				</div>
				<div>
					<img src={Avataar1} alt="avatar" className="user-avatar" />
				</div>
			</div>
		</div>
	);
};
