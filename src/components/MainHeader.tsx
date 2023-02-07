import { FC, useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import MainLogo from './MainLogo';
import { useRefContext } from './RefProvider';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },
    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface HeaderResponsiveProps {
    links: { link: string; label: string }[];
}

const MainHeader: FC<HeaderResponsiveProps> = ({ links }: HeaderResponsiveProps) => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();
    const refs = useRefContext();


    const items = (<>
        <a
            key={links[0].label}
            href={links[0].link}
            className={cx(classes.link, { [classes.linkActive]: active === links[0].link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(links[0].link);
                refs?.home.scrollIntoView();
                close();
            }}
        >
            {links[0].label}
        </a>
        <a
            key={links[1].label}
            href={links[1].link}
            className={cx(classes.link, { [classes.linkActive]: active === links[1].link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(links[1].link);
                refs?.about.scrollIntoView();
                close();
            }}
        >
            {links[1].label}
        </a>
        <a
            key={links[2].label}
            href={links[2].link}
            className={cx(classes.link, { [classes.linkActive]: active === links[2].link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(links[2].link);
                refs?.contact.scrollIntoView({ alignment: 'center' });
                close();
            }}
        >
            {links[2].label}
        </a>
    </>);

    return (
        <Header height={HEADER_HEIGHT} mb={50} className={classes.root}>
            <Container className={classes.header}>
                <MainLogo height={28} width={200} />
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}

export default MainHeader;