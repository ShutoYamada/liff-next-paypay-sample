import Link from "next/link";
import { createStyles, Anchor, Group, ActionIcon } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

const AppFooter = ({ links }: FooterCenteredProps) => {
  const { classes } = useStyles();
  // const items = links.map((link) => (
  //   <Anchor<"a">
  //     color="dimmed"
  //     key={link.label}
  //     href={link.link}
  //     sx={{ lineHeight: 1 }}
  //     onClick={(event) => event.preventDefault()}
  //     size="sm"
  //   >
  //     {link.label}
  //   </Anchor>
  // ));
  const items = links.map((link) => (
    <Link key={link.label} href={link.link}>
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
      </div>
    </div>
  );
};

export default AppFooter;
