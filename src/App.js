import Hero from './components/Hero/Hero';
import CopyIntro from './components/CopyIntro/CopyIntro';
import featuredImage from './assets/20201219_DevHynes_00136.jpeg';
import featuredImageBlur from './assets/20201219_DevHynes_00136_blur.jpg';

import './fonts/fonts.scss';
import './App.css';

function App() {
  return (
    <>
      <Hero src={featuredImage} placeholder={featuredImageBlur} />
      <CopyIntro
        info={
          {
            title: "Arkival",
            role: "Co-Founder & Creative Director",
            type: "UI/UX & Branding",
            date: "2021"
          }
        }
        cta={
          {
            label: "Github",
            href: "https://github.com/adamatronix/react-article"
          }
        }
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, nisl a eleifend luctus, nisl tellus pulvinar ipsum, sit amet interdum neque nibh quis sem. Maecenas consectetur justo quis turpis efficitur, ut varius lacus aliquet. Cras scelerisque lacinia nunc, accumsan condimentum sapien. Ut placerat magna interdum, varius enim et, imperdiet libero. Quisque accumsan tincidunt interdum. Curabitur ut urna vitae libero gravida feugiat. Ut pulvinar velit in ligula volutpat, tincidunt malesuada nisi euismod. Aenean pellentesque, odio sit amet euismod molestie, diam lacus facilisis ligula, et dapibus neque ipsum in justo. Nam ornare nisl quis risus dictum lobortis. Aenean a massa gravida, efficitur orci sit amet, interdum odio. Sed tristique eros justo, sit amet ultricies velit viverra eget. Nulla aliquet ex ante, vel egestas massa rhoncus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nulla neque, eleifend eu tristique quis, fringilla non dui. Pellentesque rhoncus nibh et dolor posuere pharetra. In in enim faucibus, hendrerit elit nec, fermentum purus."
      />
    </>
  );
}

export default App;
