import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import LangaugeSelector from "./assets/components/Langauge-selector";

function App() {
  const { t } = useTranslation();

  const { line1, line2 } = t("description");

  return (
    <div className="container">
      <LangaugeSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans
          // i18nKey={"description.line1"}
          i18nKey={line1}
          values={{
            page: "MariameCoder",
          }}
          components={{ 1: <b /> }}
        />
      </span>
      {/* <p>{line1}</p> */}
      <span>{line2}</span>
    </div>
  );
}

export default App;
