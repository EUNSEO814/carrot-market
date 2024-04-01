import CodeChallenge from "./learnTailwind/CodeChallenge";
import FormCSS from "./learnTailwind/FormCSS";
import GroupModifiers from "./learnTailwind/GroupModifiers";
import Input from "./learnTailwind/Input";
import ListAndAnimation from "./learnTailwind/ListAndAnimation";
import StateModifiers from "./learnTailwind/StateModifiers";

export default function Home() {
  return (
    // responsive
    // <main className="bg-gray-100 h-screen flex items-center justify-center p-5 sm:bg-red-100 md:bg-green-100 lg:bg-blue-100 xl:bg-orange-100 2xl:bg-purple-100 ">
    // <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
    <main>
      {/* <Input /> */}
      {/* <FormCSS /> */}
      {/* <StateModifiers /> */}
      {/* <ListAndAnimation /> */}
      {/* <GroupModifiers /> */}
      <CodeChallenge />
    </main>
  );
}
