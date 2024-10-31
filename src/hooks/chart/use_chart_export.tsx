import { useRef } from "react";
import html2canvas from "html2canvas";

const useChartExport = () => {
  const chartRef = useRef(null);

  const exportChart = async () => {
    if (!chartRef.current) return; // Verifica se o ref está definido

    const canvas = await html2canvas(chartRef.current);
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "grafico.png";
    link.click();
  };

  return { chartRef, exportChart };
};

export default useChartExport;