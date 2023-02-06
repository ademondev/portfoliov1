import { Carousel } from "@mantine/carousel";
import { Card, Text, Image, AspectRatio, Container, createStyles, Center, Title, Divider, Space } from "@mantine/core";
import { FC } from "react";
import CardCarousel from "./CardCarousel";

const mockdata = [
    {
        title: 'Top 10 places to visit in Norway this summer',
        image:
            'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 18, 2022',
    },
    {
        title: 'Best forests to visit in North America',
        image:
            'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 27, 2022',
    },
    {
        title: 'Hawaii beaches review: better than you think',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 9, 2022',
    },
    {
        title: 'Mountains at night: 12 best locations to enjoy the view',
        image:
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 12, 2022',
    },
];

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