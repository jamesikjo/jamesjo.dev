import Link from "next/link";
import { Breadcrumbs, Typography, Box, Divider } from "@mui/material";

interface BreadNavCrumbsProps {
  prevTitle?: string;
  prevHref?: string;
  current?: string;
}

const BreadNavCrumbs = ({
  prevTitle,
  prevHref,
  current,
}: BreadNavCrumbsProps) => {
  return (
    <Box mb={4}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ "& nav": { paddingLeft: 0 }, pb: 1 }}
      >
        <Link href="/" passHref>
          <Typography variant="body2" component="a" color="secondary">
            Home
          </Typography>
        </Link>
        {prevTitle && (
          <Link href={`${prevHref}`} passHref>
            <Typography variant="body2" component="a" color="secondary">
              {prevTitle}
            </Typography>
          </Link>
        )}

        <Typography color="primary" variant="body1" fontWeight="500">
          {current}
        </Typography>
      </Breadcrumbs>
      <Divider />
    </Box>
  );
};

export default BreadNavCrumbs;
