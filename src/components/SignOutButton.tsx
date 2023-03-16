"use client";
import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOut = async () => {
    setIsLoading(true);
    try {
      // await signOut();
    } catch (error) {
      // toast({
      //   title: "Error signing out",
      //   message: "Please try again later",
      //   type: "error",
      // });
    }
  };

  return (
    <Button onClick={signOut} isLoading={isLoading}>
      SignInButton
    </Button>
  );
};

export default SignOutButton;
