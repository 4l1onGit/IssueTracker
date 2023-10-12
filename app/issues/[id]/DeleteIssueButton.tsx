"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <CrossCircledIcon />
          Delete Issue
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Removal</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to remove this issue? This cannot be undone.
        </AlertDialog.Description>
        <Flex mt="4" gap="3">
          <AlertDialog.Cancel>
            <Button variant="outline" color="red">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              color="green"
              onClick={async () => {
                await axios.delete("/api/issues/" + issueId);
                router.push("/issues");
                router.refresh();
              }}
            >
              Confirm
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
