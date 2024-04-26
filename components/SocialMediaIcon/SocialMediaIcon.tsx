import Image from "next/image";

type SocialMediaIconProps = {
  name: string;
  link: string;
  image: string;
};

const SocialMediaIcon = ({ name, link, image }: SocialMediaIconProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image src={image} alt={`Pizza Denis sur ${name}`} width={20} height={20} />
    </a>
  );
};

export default SocialMediaIcon;
