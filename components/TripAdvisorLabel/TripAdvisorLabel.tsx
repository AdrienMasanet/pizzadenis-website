import Image from "next/image";
import { useState, useEffect } from "react";

const TripAdvisorLabel = () => {
  const [loadTrk, setLoadTrk] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.jscache.com/wejs?wtype=excellent&uniq=685&locationId=5965360&lang=fr&display_version=2";
    script.async = true;
    script.setAttribute("data-loadtrk", loadTrk.toString());
    script.onload = () => setLoadTrk(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [loadTrk]);

  return (
    <div id="TA_excellent685" className="TA_excellent">
      <ul id="P1pstkZ977" className="TA_links abb0cQR">
        <li id="I1BfX0" className="Z1ytrMo">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tripadvisor.fr/Restaurant_Review-g2482779-d5965360-Reviews-Pizza_Denis-Saint_Laurent_de_la_Salanque_Pyrenees_Orientales_Occitanie.html"
          >
            <Image
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
              width={150}
              height={50}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TripAdvisorLabel;
