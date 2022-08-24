import React from "react";
import "./sidebar.css";

import { TbSmartHome } from "react-icons/tb";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { MdForwardToInbox } from "react-icons/md";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";

import BrandLogo from "../../assets/brand-logo.png";

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="brand-name">
				<img src={BrandLogo} className="brand-name-img" alt="Brand-Logo" />
			</div>
			<div className="sidebar-item">
				<icon className="sidebar-item-icon">
					<TbSmartHome />
				</icon>
				<div className="sidebar-item-name">Home</div>
			</div>
			<div className="sidebar-item active-sidebar-item">
				<icon className="sidebar-item-icon active-sidebar-icon">
					<HiOutlineChartSquareBar />
				</icon>
				<div className="sidebar-item-name">Dashboard</div>
			</div>
			<div className="sidebar-item">
				<icon className="sidebar-item-icon">
					<MdForwardToInbox />
				</icon>
				<div className="sidebar-item-name">Inbox</div>
				<div className="new-item-badge">New</div>
			</div>
			<div className="sidebar-item">
				<icon className="sidebar-item-icon">
					<BsLayoutTextSidebarReverse />
				</icon>
				<div className="sidebar-item-name">Products</div>
			</div>
			<div className="sidebar-item">
				<icon className="sidebar-item-icon">
					<TbSettings />
				</icon>
				<div className="sidebar-item-name">Admin</div>
			</div>
		</div>
	);
};
