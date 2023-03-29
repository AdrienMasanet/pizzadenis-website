import useCurrentlyOpen from "@/hooks/useCurrentlyOpen";

const CurrentlyOpen = ({}) => {
  const [isOpen, message] = useCurrentlyOpen(new Date());

  return (
    <div className={`${isOpen ? "neon-borders" : ""} w-fit px-3 py-2 mx-auto my-10 rounded-lg bg-stone-50/60 border border-black/20 backdrop-blur-sm shadow-lg`}>
      <p>{message}</p>
    </div>
  );
};

export default CurrentlyOpen;
