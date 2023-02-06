import { createStyles, Loader } from "@mantine/core";
import { FC } from "react";
import LoadingLogo from "./LoadingLogo";

const useStyles = createStyles((theme) => ({
    screen: {
        textAlign: 'center',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
    }
}));

const LoadingScreen: FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.screen}>
            <LoadingLogo />
            <Loader color="indigo" variant="dots" />
        </div>
    );
}

export default LoadingScreen;