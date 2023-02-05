import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { TbBrandTwitter, TbBrandYoutube, TbBrandInstagram } from 'react-icons/tb';
import { FC } from 'react';
import MainLogo from './MainLogo';

// pixels
const ICON_SIZE = 20;

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const MainFooter: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MainLogo height={28} width={200} color='white'/>
        <Group spacing={20} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <TbBrandTwitter size={ICON_SIZE}  />
          </ActionIcon>
          <ActionIcon size="lg">
            <TbBrandYoutube size={ICON_SIZE}  />
          </ActionIcon>
          <ActionIcon size="lg">
            <TbBrandInstagram size={ICON_SIZE}  />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

export default MainFooter;