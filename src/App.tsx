import { FC, useEffect } from "react";
import MainAbout from "./components/MainAbout";
import MainContact from "./components/MainContact";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import MainHero from "./components/MainHero";
import MainProjects from "./components/MainProjects";
import Aos from 'aos';
import 'aos/dist/aos.css';
import RefProvider from "./components/RefProvider";

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

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (<>
        <RefProvider>
            <MainHeader
                links={headerLinks}
            />
            <MainHero />
            <MainAbout />
            <MainProjects />
            <MainContact />
            <MainFooter />
        </RefProvider>
    </>);
}

export default App;