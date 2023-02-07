import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { TbBrandTwitter, TbBrandYoutube, TbBrandInstagram, TbBrandGmail } from 'react-icons/tb';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { FC } from 'react';
import MainLogo from './MainLogo';

// pixels
const ICON_SIZE = 20;

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
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
        <MainLogo height={28} width={200} color='white' />
        <Group spacing={20} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg" component='a' href='https://github.com/ademondev' target='_blank'>
            <AiFillGithub
              size={ICON_SIZE}
            />
          </ActionIcon>
          <ActionIcon size="lg" component='a' href='https://www.linkedin.com/in/alejandro-pedemonte-806131265/' target='_blank'>
            <AiOutlineLinkedin
              size={ICON_SIZE}

            />
          </ActionIcon>
          <ActionIcon size="lg">
            <TbBrandGmail
              size={ICON_SIZE}
              onClick={() => window.location.href = 'mailto:ademondev@gmail.com'}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

export default MainFooter;