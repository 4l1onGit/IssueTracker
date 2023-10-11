import React from "react";
import { Box, Text, Flex, Card } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3" my="2">
        <Skeleton width="4rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose lg:prose-xl" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
