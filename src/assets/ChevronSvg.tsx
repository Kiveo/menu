interface SvgProps {
  fill?: string;
  height?: number;
  stroke?: string;
  width?: number;
}

const ChevronSvg = ({
  fill = "#cccc",
  height,
  stroke = "#dff",
  width
}: SvgProps) => {
  //
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 47"
      fill={fill}
    >
      <path
        d="M29.0554 24.0318L2.47014 45.9623C1.71382 46.5862 0.604694 45.8622 0.871551 44.9188L2.64473 38.6499C5.49128 28.5864 5.46284 17.9268 2.56263 7.8786L0.880919 2.05207C0.609679 1.11232 1.70973 0.382179 2.47038 0.997095L29.0477 22.4827C29.5397 22.8804 29.5434 23.6292 29.0554 24.0318Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
};

export default ChevronSvg;
