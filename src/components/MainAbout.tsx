import { createStyles, Center, Container, Divider, Text, Title, Space, List, ThemeIcon, Flex } from "@mantine/core";
import { FC } from "react";
import { GiPlayButton } from 'react-icons/gi';

const useStyles = createStyles((theme) => ({
    headers: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        lineHeight: 1,
        fontSize: 40,
        marginTop: 50,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            fontSize: 34,
            lineHeight: 1.15,
        },
    },
    aboutContainer: {
        backgroundColor: '#0353a4',
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 124,
        paddingBottom: 20,
        maxWidth: 10000
    },
    aboutHeader: {
        padding: 10,
        paddingTop: 20,
        textAlign: 'left'
    },
    description: {
        color: theme.white,
        opacity: 0.8,
        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
        },
    },
    span: {
        fontWeight: 'bolder'
    },
    list: {
        maxWidth: 600,
        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
        },
    },
    firstList: {
        marginRight: '30%',
        [theme.fn.smallerThan('md')]: {
            maxRight: '15%',
            maxWidth: '100%',
        },
    }

}));

const MainAbout: FC = () => {
    const { classes } = useStyles();

    return (<>
        <Space h='xl' />
        <Container data-aos="fade-right" className={classes.aboutContainer} id="about">
            <Container className={classes.headers}>
                <Center>
                    <Title className={classes.aboutHeader}>
                        About me
                    </Title>
                </Center>
                <Divider />
            </Container>
            <Space h='lg' />
            <Container style={{ maxWidth: 600 }}>
                <Center>
                    <Text className={classes.description}>
                        Hello! My name is Alejandro and I have a <span className={classes.span}> passion for creating cool things for the web</span>.
                        My journey in programming began in late 2019, when some friends and I were faced with a <span className={classes.span}> challenge that required programming
                            expertise to resolve</span>. When no one stepped up to tackle the problem, I took it upon myself to<span className={classes.span}> learn and find a solution</span>!
                        <br />
                        <br />
                        Fast-forward to today, I've taught myself how to make interactive, modern
                        styled web<span className={classes.span}> applications accessible to everyone, everywhere</span>.
                        <br />
                        <br />
                        Here are some of the technologies I've been using recently:
                        <br />
                        <br />
                    </Text>
                </Center>
                <Container>
                    <Flex>
                        <List
                            className={classes.firstList}
                            icon={
                                <ThemeIcon size={24} color="transparent">
                                    <GiPlayButton />
                                </ThemeIcon>
                            }
                        >
                            <List.Item className={classes.description}>TypeScript</List.Item>
                            <List.Item className={classes.description}>React</List.Item>
                            <List.Item className={classes.description}>NodeJS</List.Item>
                        </List>
                        <List
                            className={classes.list}
                            icon={
                                <ThemeIcon size={24} color="transparent">
                                    <GiPlayButton />
                                </ThemeIcon>
                            }
                        >
                            <List.Item className={classes.description}>ExpressJS</List.Item>
                            <List.Item className={classes.description}>Electron</List.Item>
                            <List.Item className={classes.description}>SQLite</List.Item>
                        </List>
                    </Flex>
                </Container>
            </Container>
            <Space h='xl' />
        </Container>
    </>);
}

export default MainAbout;