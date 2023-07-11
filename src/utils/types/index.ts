import { StaticImageData } from "next/image";

export type BulletPoint = {
  emoticon?: string;
  text: string;
  src?: StaticImageData;
  alt?: string;
};

export type Tag =
  | "AI"
  | "VR"
  | "3D"
  | "Hackathon"
  | "React"
  | "NextJS"
  | "Full Stack Contributions"
  | "Mobile"
  | "Web"
  | "Unity";

export type ProjectBasicInfo = {
  title: string;
  subtitle: string;
  url: string;
  image: StaticImageData | "";
  backColor?: `#${string}`;
  tags?: Tag[];
};
