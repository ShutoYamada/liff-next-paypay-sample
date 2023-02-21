import { useRouter } from "next/router";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Button,
  Paper,
  RingProgress,
  ThemeIcon,
  Center,
} from "@mantine/core";
import Event from "../../types/Event";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

type Props = {
  event: Event;
  onClickPurchase: () => void;
};

const StampRallyDetailCard = ({ event, onClickPurchase }: Props) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={297}
          height={198}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="md">
        <div>
          <Text weight={500}>{event.title}</Text>
          <Text size="xs" color="dimmed">
            {event.description}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.section}>
        <Group spacing={30} style={{ justifyContent: "center" }}>
          <Paper withBorder radius="md" p="xs" key={1}>
            <Group>
              <RingProgress
                size={160}
                roundCaps
                thickness={8}
                sections={[{ value: 100, color: "teal" }]}
                label={
                  <Center>
                    <Text fw={700} fz="xl">
                      済
                    </Text>
                  </Center>
                }
              />
            </Group>
          </Paper>
          <Paper withBorder radius="md" p="xs" key={1}>
            <Group>
              <RingProgress
                size={160}
                roundCaps
                thickness={8}
                sections={[{ value: 100, color: "gray" }]}
                label={<Center> </Center>}
              />
            </Group>
          </Paper>
          <Paper withBorder radius="md" p="xs" key={1}>
            <Group>
              <RingProgress
                size={160}
                roundCaps
                thickness={8}
                sections={[{ value: 100, color: "gray" }]}
                label={<Center> </Center>}
              />
            </Group>
          </Paper>
        </Group>
      </Card.Section>
    </Card>
  );
};
export default StampRallyDetailCard;
