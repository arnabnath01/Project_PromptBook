import Feed from "@components/Feed";
import TypingEffect from "@components/TypingEffect";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    
    <TypingEffect/>

    <p className='desc text-center'>
      PromptBook is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
