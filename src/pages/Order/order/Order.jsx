import { useState } from "react";
import ordercover from "../../../assets/home/68.jpg"
import Ourmenucover from "../../Home/shared/over/Ourmenucover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../../Hoks/usehoks/UseMenu";
import OrderTab from "../../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categorys =['Math','pizza','soup','dessert','offered'];
    const {category}=useParams();
    const initilgeindex = categorys.indexOf(category);
    const [tabsindex,settabindex]= useState(initilgeindex);
    const [menus] = UseMenu();
    
    const Math = menus.filter(item => item.category === 'Math')
    const Language = menus.filter(item => item.category === 'Language')
    const Library = menus.filter(item => item.category === 'Library')
    const French = menus.filter(item => item.category === 'French')
    const MusicProgram = menus.filter(item => item.category === 'MusicProgram')
    return (
        <div>
            <Helmet><title>Add class</title></Helmet>
            <Ourmenucover img={ordercover} title='order confrim here'></Ourmenucover>
            <p className="text-3xl font-semibold text-green-500 bg-orange-300">chose your class here</p>
            <Tabs defaultIndex={tabsindex} onSelect={(index) => settabindex(index)}>
                <TabList>
                    <Tab>Math</Tab>
                    <Tab>Language</Tab>
                    <Tab>Library</Tab>
                    <Tab>French</Tab>
                    <Tab>MusicProgram</Tab>
                    
                </TabList>
                
                <TabPanel>
                <OrderTab items={Math}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={Language}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={Library}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={French}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={MusicProgram}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;