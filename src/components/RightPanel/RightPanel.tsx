import { useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import './rightPanelStyle.css'
import Summary from "./Summary";
import Transactions from "./Transactions";
import Accounts from "./Accounts";

export default function RightPanel() {
    const [activeTab, setActiveTab] = useState(0);

    const tabComponents = [
        <Summary />,
        <Transactions />,
        <Accounts />,
    ]
    
    return (
        <div className="panelContainer">
            <HeaderNavigation onSetActiveTab={setActiveTab} activeTab={activeTab}/>
            {tabComponents[activeTab]}
        </div>
    )
} 