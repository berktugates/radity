import { Navbar } from "@/components/common/Navbar";
import { EstimateQuestionWrapper } from "@/components/home/EstimateQuestionWrapper";
import { Header } from "@/components/home/Header";
import { SelectPlatform } from "@/components/home/SelectPlatform";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <SelectPlatform />
    <EstimateQuestionWrapper />
    </>
  );
}
