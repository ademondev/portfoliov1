import { createStyles, Container, Title, Text, Button, Space } from '@mantine/core';
import { FC } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  topTitle: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 30,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 20,
      lineHeight: 1.15,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 800,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

const MainHero: FC = () => {
    const { classes } = useStyles();
    return (
      <div className={classes.root}>
        <Container data-aos="fade-in" size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title
                  className={classes.topTitle}
                >
                Hi, my name is
              </Title>
              <Space h='sm'/>
              <Title className={classes.title}>
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: 'pink', to: 'yellow' }}
                >
                  Alejandro Pedemonte.
                </Text>
                <Text>
                  I make cool things for the web.
                </Text>
              </Title>
    
              <Text className={classes.description} mt={30}>
                I'm a <Text component='a' fw={700}>full-stack web developer</Text> and an industrial
                engineering student with a passion for building modern, 
                interactive web applications using technologies like NodeJS, React, 
                ExpressJS, and Typescript. I've been coding for 3 years and am always 
                looking for new challenges.
              </Text>
    
              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Contact me!
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
}

export default MainHero;