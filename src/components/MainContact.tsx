import { TextInput, Textarea, SimpleGrid, Title, Button, Container, createStyles, Center, Divider, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC } from 'react';
import { useRefContext } from './RefProvider';
import { showNotification } from '@mantine/notifications';
import { AiFillCheckCircle } from 'react-icons/ai';

const FORM_ENDPOINT = `${import.meta.env.VITE_SERVICE_URL}`;

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

interface FormProps {
  name: string
  email: string
  subject: string
  message: string
}

// true - success | false - failed
const sendForm = (endpoint: string, formData: FormProps): Promise<boolean> => {
  const data = new FormData();
  for (let property in formData) {
    data.append(property, formData[property as keyof FormProps])
  }
  if (data === undefined) return Promise.resolve(false);
  return fetch(endpoint, {
    method: 'POST',
    body: data,
    mode: 'no-cors'
  })
  .then(response => {
    if (response.ok) {
      return true;
    }
    return false;
  })
  .catch(() => {
    return false;
  });
}

const MainContact: FC = () => {
  const { classes } = useStyles();
  const ref = useRefContext();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 3,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
      message: (value) => value.trim().length < 11
    },
  });

  async function handleSubmit(form: FormProps) {
    try {
      const res = await sendForm(FORM_ENDPOINT, form);
        showNotification({
          autoClose: 5000,
          title: "Success!",
          message: 'The email was sent successfully',
          color: 'green',
          icon: <AiFillCheckCircle />,
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container data-aos="fade-up" className={classes.outerFormContainer} ref={ref?.contact.targetRef}>
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
        <form className={classes.form} onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              <TextInput label="Your name" placeholder="Your name" {...form.getInputProps('name')} />
              <TextInput label="Your email" placeholder="youremail@example.com" required {...form.getInputProps('email')} />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required {...form.getInputProps('subject')} />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
              {...form.getInputProps('message')}
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