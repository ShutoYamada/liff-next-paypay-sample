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
import Item from "../types/Item";

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
  item: Item;
  canPurchase: boolean;
  onClickPurchase: () => void;
};

const ItemDetailCard = ({ item, canPurchase, onClickPurchase }: Props) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={item.imageUrl} alt={item.title} width={297} height={198} />
      </Card.Section>

      <Group position="apart" mt="md" mb="md">
        <div>
          <Text weight={500}>{item.title}</Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
        {item?.discountPercent && (
          <Badge variant="outline">{item.discountPercent}% off</Badge>
        )}
      </Group>

      <Card.Section className={classes.section}>
        <Group spacing={30} style={{ justifyContent: "center" }}>
          <Button radius="xl" onClick={onClickPurchase} disabled={!canPurchase}>
            決済する
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};
export default ItemDetailCard;
