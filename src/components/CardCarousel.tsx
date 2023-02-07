import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, Badge } from '@mantine/core';
import { FC, ReactNode } from 'react';

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
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  techNames: string[];
}

const Card: FC<CardProps> = ({ image, title, techNames }: CardProps) => {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {techNames.map((name) => 
            <Badge>{name}</Badge>
          )}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://i.imgur.com/tXCXFCi.png',
    title: 'ERP: A desktop app to set your Discord Rich Presence',
    techNames: ['Electron', 'JavaScript', 'NodeJS', 'CSS', 'HTML'],
  },
  {
    image:
      'https://i.imgur.com/ODtX3dP.jpg',
    title: 'TODO Simple v2: A simple, modern task app',
    techNames: ['React', 'TypeScript', 'Vite', 'Mantine'],
  },
  {
    image:
      'https://i.imgur.com/G3aJYnI.jpg',
    title: 'Nare: A Discord bot for roleplayers',
    techNames: ['DiscordJS', 'TypeScript', 'NodeJS'],
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