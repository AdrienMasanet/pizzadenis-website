type SubtitleProps = {
  children: React.ReactNode;
  whiteOutline?: boolean;
};

export const Subtitle = ({ children, whiteOutline }: SubtitleProps) => {
  return <h2 className={`mx-auto my-4 text-center max-w-screen-md ${whiteOutline ? "white-outline" : ""}`}>{children}</h2>;
};

export default Subtitle;
