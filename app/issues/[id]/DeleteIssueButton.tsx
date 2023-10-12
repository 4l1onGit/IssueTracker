import { Button } from "@radix-ui/themes";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <CrossCircledIcon />
      Delete Issue
    </Button>
  );
};

export default DeleteIssueButton;
