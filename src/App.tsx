import { ScrollArea } from "@mantine/core";
import { FC } from "react";
import MainAbout from "./components/MainAbout";
import MainContact from "./components/MainContact";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import MainHero from "./components/MainHero";
import MainProjects from "./components/MainProjects";

const headerLinks = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'About',
        link: '/about'
    },
    {
        label: 'Contact',
        link: '/contact'
    }
];

const App: FC = () => {
    return (<>
        <MainHeader
            links={headerLinks}
        />
        <MainHero />
        <MainAbout />
        <MainProjects />
        <MainContact />
        <MainFooter />
    </>);
}

export default App;