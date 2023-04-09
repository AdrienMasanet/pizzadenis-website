import { useState, useEffect, useRef } from "react";

type AccordionMenuProps = {
  items: Array<{
    title: string;
    children: React.ReactNode;
  }>;
};

const AccordionMenu = ({ items }: AccordionMenuProps) => {
  const [openedAccordions, setOpenedAccordions] = useState<{ [key: string]: boolean }>({});
  const [itemsContainersScrollHeights, setItemsContainersScrollHeights] = useState<{ [key: string]: number }>({});
  const itemsContainersRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    itemsContainersRef.current = itemsContainersRef.current.slice(0, items.length);
    items.forEach((item, index) => {
      const content = itemsContainersRef.current[index];
      if (content) {
        setItemsContainersScrollHeights((prev) => ({ ...prev, [item.title]: content.scrollHeight }));
      }
    });
  }, [items]);

  function toggleAccordion(title: string) {
    setOpenedAccordions({
      ...openedAccordions,
      [title]: !openedAccordions[title],
    });
    console.log(document.querySelector(`#${title}-content`)?.scrollHeight);
  }

  return (
    <div className="px-4 py-2 text-xs lg:text-base bg-white rounded-lg border border-black/20 shadow-md">
      {items.map((item, index) => (
        <div key={index}>
          <div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(item.title)}>
              <h3 className="uppercase font-bold">{item.title}</h3>
              <span className={`text-xl select-none transition-rotate duration-300 ease-out ${openedAccordions[item.title] ? "rotate-90" : ""}`}>›</span>
            </div>
            <div
              ref={(itemContainerElement) => (itemsContainersRef.current[index] = itemContainerElement)}
              className={`text-xs lg:text-base overflow-hidden transition-max-h duration-500 ease-out`}
              style={{
                maxHeight: openedAccordions[item.title] ? itemsContainersScrollHeights[item.title] + "px" : "0px",
              }}
            >
              {item.children}
            </div>
          </div>
          {index < items.length - 1 && <hr className="my-2" />}
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
