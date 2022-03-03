interface AvatarProps {
  url: string;
  className?: string;
}

/**
 *
 * @param url Image src
 * @param className Optional class
 * @returns Avatar Component
 */
const Avatar: React.FC<AvatarProps> = ({
  url,
  className,
}): React.ReactElement => {
  return (
    <img
      loading='lazy'
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt='profile photo'
    />
  );
};

export default Avatar;
