import { TextInput, Textarea, SimpleGrid, Title, Button, Container, createStyles, Center, Divider, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC } from 'react';

const useStyles = createStyles((theme) => ({
  outerFormContainer: {
    backgroundColor: '#003559',
    maxWidth: 10000
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    maxWidth: '50%',
    [theme.fn.smallerThan('md')]: {
      maxWidth: '75%',
    },
  },
  formText: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 20,
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 16,
      lineHeight: 1.15,
    },
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
  wrapper: {
    display: 'flex',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    borderRadius: theme.radius.lg,
    padding: 4,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  form: {
    boxSizing: 'border-box',
    flex: 1,
    padding: theme.spacing.xl,
    borderLeft: 0,

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.md,
      paddingLeft: theme.spacing.md,
    },
  },

  fields: {
    marginTop: -12,
  },

  fieldInput: {
    flex: 1,

    '& + &': {
      marginLeft: theme.spacing.md,

      [theme.fn.smallerThan('sm')]: {
        marginLeft: 0,
        marginTop: theme.spacing.md,
      },
    },
  },
  fieldsGroup: {
    display: 'flex',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
  button: {
    width: '60%',
    [theme.fn.smallerThan('sm')]: {
      width: '100%'
    }
  }
}));

const MainContact: FC = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container data-aos="fade-up" className={classes.outerFormContainer}>
      <Container className={classes.headers}>
        <Center>
          <Title
            order={2}
            size="h1"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
            weight={900}
            align="center"
            style={{ padding: 10, paddingTop: 20, paddingBottom: 10 }}
          >
            Get In Touch
          </Title>
        </Center>
        <Divider />
      </Container>
      <Space h='lg' />
      <Space h='sm' />
      <Container className={classes.formContainer}>
        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your email" placeholder="youremail@example.com" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />
            <Space h='lg' />
            <Center>
              <Button 
                type="submit"
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                className={classes.button}
              >
                Send message
              </Button>
            </Center>
          </div>
        </form>
      </Container>
      <Space h='lg' />
    </Container>
  );
}

export default MainContact;