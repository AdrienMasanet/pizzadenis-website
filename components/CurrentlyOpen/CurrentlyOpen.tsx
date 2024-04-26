import useCurrentlyOpen from "@/hooks/useCurrentlyOpen";
import { useEffect, useState } from "react";

type CurrentlyOpenProps = {
  exceptionalClosureMessage?: string;
};

const CurrentlyOpen = ({ exceptionalClosureMessage }: CurrentlyOpenProps) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isOpen, message] = useCurrentlyOpen(currentDateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000 * 10); // Update opening status every 20 seconds to accurately display minutes left

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-12 md:mx-5">
      <div
        className={`${!exceptionalClosureMessage && isOpen ? "neon-borders" : ""} w-fit px-3 py-2 mx-auto my-10 rounded-lg bg-stone-50/60 border border-black/20 backdrop-blur-sm shadow-lg`}
        data-testid="container"
      >
        <p>{exceptionalClosureMessage || message}</p>
      </div>
    </div>
  );
};

export default CurrentlyOpen;
