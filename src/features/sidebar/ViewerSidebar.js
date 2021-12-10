import React from "react";
import { useSelector } from 'react-redux';
import Sidebar from "react-sidebar";
import Viewer from '../viewer/Viewer';
import MaterialTitlePanel from "./materialComponents/MaterialTitlePanel";
import SidebarContent from "./materialComponents/SidebarContent";
import { selectDocked, selectProduct } from './sidebarSlice';

export default function ViewerSidebar() {

	const product = useSelector(selectProduct);
	const docked = useSelector(selectDocked);

	const sidebar = <SidebarContent />;
	const sidebarProps = {
		sidebar,
		docked: docked,
		sidebarClassName: "custom-sidebar-class",
		contentId: "custom-sidebar-content-id"
	};
	return (
		<Sidebar {...sidebarProps}>
			<MaterialTitlePanel title={<span> Arm Viewer</span>}>
				<div className="App">
					<Viewer center={[40, 46]} zoom={8} product={product} />
				</div>
			</MaterialTitlePanel>
		</Sidebar>
	);
}
