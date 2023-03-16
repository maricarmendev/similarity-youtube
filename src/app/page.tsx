import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Paragraph from "./components/ui/Paragraph";
import LargeHeading from "./components/ui/LargeHeading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className="bg-red-500">
    <Paragraph size="default">Hello world</Paragraph>
    <Paragraph size="sm">Hello world</Paragraph>

    <LargeHeading>Hi</LargeHeading>
    <LargeHeading size="large">Hi</LargeHeading>
    <LargeHeading size="sm">Hi</LargeHeading>
  </main>;
}
