import Hero from './components/Hero/Hero';
import CopyIntro from './components/CopyIntro/CopyIntro';
import Carousel from './components/Carousel/Carousel';
import ImageBlock from './components/ImageBlock/ImageBlock';
import { Body as CopyBody, CopySection } from './components/CopySection/CopySection';
import { Image50, Image90, Image100 } from './components/ImageSet/ImageSet';
import featuredImage from './assets/20201219_DevHynes_00136.jpeg';
import featuredImageBlur from './assets/20201219_DevHynes_00136_blur.jpg';
import devLandscape from './assets/Blood Orange - Press Photo 3 -  Nick Harwood - 300dpi.jpeg';
import devLandscapeBlur from './assets/Blood Orange - Press Photo 3 -  Nick Harwood - 300dpi - blur.jpg';
import devMaskImage from './assets/20201219_DevHynes_00103.jpeg';
import devMaskImageBlur from './assets/20201219_DevHynes_00103_blur.jpg';
import devGardenImage from './assets/Blood-Orange-billboard.jpeg';
import devGardenImageBlur from './assets/Blood-Orange-billboard-blur.jpg';

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
      <Carousel itemSize="55%">
        <ImageBlock style={{marginLeft:'30px'}} caption="1."/>
        <ImageBlock style={{marginLeft:'30px'}} caption="2."/>
        <ImageBlock style={{marginLeft:'30px'}} caption="3."/>
        <ImageBlock style={{marginLeft:'30px'}} caption="4."/>
      </Carousel>
      <CopyBody data="<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p>
            <p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"/>
      <Image90 src={devLandscape} placeholder={{
        src: devLandscapeBlur,
        width: 1368,
        height: 600
      }} alt="test" caption="1."/>
      <CopySection data={[
        "<p>Styleguide</p>",
        "<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p><p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p><p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"
      ]}/>
      <Image50 src={devMaskImage} placeholder={{
        src: devMaskImageBlur,
        width: 1000,
        height: 1499
      }} alt="test" caption="Maecenas sed diam eget risus varius"/>
      <CopyBody data="<p>Development</p><br><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p>
<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p>
<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"/>
      <Image100 src={devGardenImage} placeholder={{
        src: devGardenImageBlur,
        width: 1240,
        height: 700
      }} alt="test"/>
    </>
  );
}

export default App;
