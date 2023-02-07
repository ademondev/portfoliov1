import { Carousel } from "@mantine/carousel";
import { Card, Text, Image, AspectRatio, Container, createStyles, Center, Title, Divider, Space } from "@mantine/core";
import { FC } from "react";
import CardCarousel from "./CardCarousel";

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: '#006daa',
        marginTop: 70,
    },
    headers: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        lineHeight: 1,
        fontSize: 40,
        marginTop: 124,
        
        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            fontSize: 34,
            lineHeight: 1.15,
        },
    },
    aboutHeader: {
        padding: 10,
        paddingTop: 20,
        textAlign: 'left'
    },
    mainContainer: {
        maxWidth: 700
    },
}));

const MainProjects: FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <Container data-aos="fade-left">
                <Container className={classes.headers}>
                    <Center>
                        <Title className={classes.aboutHeader}>
                            Projects
                        </Title>
                    </Center>
                    <Divider />
                </Container>
                <Space h='lg' />
                <Space h='sm' />
                <CardCarousel />
            </Container>
            <Space h='lg' />
        </div>
    );
}

export default MainProjects;