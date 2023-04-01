type TitleProps = {
  text: string;
  whiteOutline?: boolean;
};

const Title = ({ text, whiteOutline }: TitleProps) => {
  let colorIndex = 0; // Use a custom index instead of native map()'s one to skip it from incrementing when a space is found
  const letters: JSX.Element[] = text.split("").map((letter, index) => {
    if (letter === " ") {
      return <span key={index}>{letter}</span>;
    }

    colorIndex++; // Index was not incremented if a space was found thanks to the early return above

    return (
      <span key={index} className={`text-${colorIndex % 2 === 0 ? "red" : "green"}-800`}>
        {letter}
      </span>
    );
  });

  return <h1 className={`mt-16 mb-6 text-center text-5xl font-roastchicken uppercase ${whiteOutline ? "white-outline" : ""}`}>{letters}</h1>;
};

export default Title;
