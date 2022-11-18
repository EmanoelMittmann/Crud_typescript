import { Button, ButtonGroup } from "@chakra-ui/react";

const PrimaryButton = () => {
  return (
    <>
      <Button
        isLoading
        loadingText="Submitting"
        colorScheme="teal"
        variant="solid"
      >
        Button
      </Button>
    </>
  );
};

export default PrimaryButton;
