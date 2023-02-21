import { useRouter } from "next/router";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Button,
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
};

const EventCard = ({ event }: Props) => {
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
        <Group spacing={30} style={{ justifyContent: "space-between" }}>
          <Button
            radius="xl"
            onClick={() => {
              router.push(`/events/${event.id}`);
            }}
          >
            詳細
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};
export default EventCard;
