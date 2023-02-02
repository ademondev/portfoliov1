import { FC } from "react";
import MainHeader from "./components/MainHeader";
import MainHero from "./components/MainHero";

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
    </>);
}

export default App;