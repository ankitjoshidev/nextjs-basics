import Image from "next/image";
import styles from "./gallery.module.css";
import { Gallery } from "next-gallery"
import Testimonials from "@/components/testimonials/testimonials";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const images = [
  { src: "https://images.pexels.com/photos/20780453/pexels-photo-20780453/free-photo-of-a-close-up-of-a-pink-cherry-blossom-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", aspect_ratio: 16/9 },
  { src: "https://images.pexels.com/photos/1483155/pexels-photo-1483155.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", aspect_ratio: 16/9 },
  { src: "https://images.pexels.com/photos/479384/pexels-photo-479384.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", aspect_ratio: 16/9 },
  { src: "https://images.pexels.com/photos/1057833/pexels-photo-1057833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", aspect_ratio: 16/9 },
  { src: "https://images.pexels.com/photos/2109642/pexels-photo-2109642.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", aspect_ratio: 16/9 },
  { src: "https://images.pexels.com/photos/1094213/pexels-photo-1094213.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", aspect_ratio: 16/9 }
];

const widths = [ 500, 1000, 1600 ]
const ratios = [ 2.2, 4, 6, 8 ]

export default function About() {
  return (
    <div>
      <h1>The standard Lorem Ipsum passage, used since the 1500s</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Gallery {...{images, widths, ratios}} />
      <Testimonials/>
    </div>
  );
}
