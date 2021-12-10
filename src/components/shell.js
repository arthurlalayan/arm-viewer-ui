import React from "react";
import { useSelector } from 'react-redux';
import Sidebar from "react-sidebar";
import { selectDocked, selectProduct } from "../features/sidebar/sidebarSlice";
import MaterialTitlePanel from "./sidebar/MaterialTitlePanel";
import SidebarContent from "./sidebar/SidebarContent";
import Viewer from "./viewer/Viewer";

export default function Shell() {
	const docked = useSelector(selectDocked);
	const product = useSelector(selectProduct);
	const sidebar = <SidebarContent />;
	const sidebarProps = {
		sidebar,
		docked,
		sidebarClassName: "custom-sidebar-class",
		contentId: "custom-sidebar-content-id"
	};
	return (
		<Sidebar {...sidebarProps}>
			<MaterialTitlePanel title={<span> Arm Viewer</span>}>
				<div>
					<Viewer center={[40, 46]} zoom={8} product={product} />
				</div>
			</MaterialTitlePanel>
		</Sidebar>
	);

}
