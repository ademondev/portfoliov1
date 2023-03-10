import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, Badge, Center } from '@mantine/core';
import { FC, ReactNode } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';



const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

type Theme = 'light' | 'dark';

interface CardProps {
  image: string;
  title: string;
  techNames: string[];
  githubLink?: string;
  discordLink?: string;
  theme?: Theme;
}

const Card: FC<CardProps> = ({ image, title, techNames, githubLink, discordLink, theme }: CardProps) => {
  const { classes } = useStyles();
  const gitLinkLength = githubLink?.length ? githubLink?.length : 0
  const discordLinkLength = discordLink?.length ? discordLink?.length : 0
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs" key={`child_${title}`}>
          {techNames.map((name) => 
            <Badge color={theme === 'dark' ? 'dark' : undefined } variant="filled">{name}</Badge>
          )}
        </Text>
        <Title order={3} style={{ color: `${theme === 'dark' ? '#2c2f33' : undefined }`}} className={classes.title}>
          {title}
        </Title>
      </div>
      <Center style={{ backgroundColor: 'white', borderRadius: 5 }}>
        {gitLinkLength > 0 ? 
          <Button component='a' style={{ backgroundColor: `${theme === 'dark' ? '#2c2f33' : 'white'}`, color: `${theme === 'dark' ? 'white' : 'black'}`}} href={githubLink} leftIcon={<AiFillGithub fontSize={20} color={`${theme === 'dark' ? 'white' : 'black'}`}/>}>Github</Button>
          :
          null
        }
        {discordLinkLength > 0 ?
          <Button component='a' href={discordLink} style={{ backgroundColor: 'white', color: 'black'}} leftIcon={<SiDiscord fontSize={20} color='black'/>}>Discord</Button>
          :
          null
        }
      </Center>
    </Paper>
  );
}

const data: CardProps[] = [
  {
    image: 'https://drive.google.com/uc?id=12PIbmCUdXpvW8BQHobqLAh-a2DlNMcqI',
    title: 'Discord clone using TailwindCSS',
    techNames: ['React', 'TypeScript', 'TailwindCSS'],
    githubLink: 'https://github.com/ademondev/discord-landing-clone-tailwind',
    theme: 'dark'
  },
  {
    image:
      'https://i.imgur.com/tXCXFCi.png',
    title: 'ERP: A desktop app to set your Discord Rich Presence',
    techNames: ['Electron', 'JavaScript', 'NodeJS', 'CSS', 'HTML'],
    githubLink: 'https://github.com/ademondev/ERP'
  },
  {
    image:
      'https://i.imgur.com/ODtX3dP.jpg',
    title: 'TODO Simple v2: A simple, modern task app',
    techNames: ['React', 'TypeScript', 'Vite', 'Mantine'],
    githubLink: 'https://github.com/ademondev/todo-app-react-mantine'
  },
  {
    image:
      'https://i.imgur.com/G3aJYnI.jpg',
    title: 'Nare: A Discord bot for roleplayers',
    techNames: ['DiscordJS', 'TypeScript', 'NodeJS'],
    discordLink: 'https://discord.gg/vVxbDdjVXy'
  },
];


const CardCarousel:FC = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}

export default CardCarousel;