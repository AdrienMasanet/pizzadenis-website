type SubtitleProps = {
  children: React.ReactNode;
  whiteOutline?: boolean;
};

export const Subtitle = ({ children, whiteOutline }: SubtitleProps) => {
  return <h2 className={`mx-auto my-4 px-2 py-1 text-lg leading-6 text-center max-w-screen-md bg-white rounded-lg ${whiteOutline ? "white-outline" : ""}`}>{children}</h2>;
};

export default Subtitle;
