import Contact from "@/components/contact";
import Story from "@/components/story";

export default function About() {
  return (
    <main className='flex flex-col items-center relative mx-auto max-w-[72rem] border-x border-[#e6e8eb]'>
      <Story />
      <Contact />
    </main>
  );
}
