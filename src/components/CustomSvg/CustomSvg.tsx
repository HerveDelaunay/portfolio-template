interface Props {
  fill: string;
}

const CustomSvg: React.FC<Props> = ({ fill }) => {
  return (
    <span className="absolute top-[18px] left-4 w-4 h-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
        <g fill="none" fill-rule="evenodd" stroke={fill}>
          <path d="M0 9l8 4 8-4" />
          <path opacity=".5" d="M0 5l8 4 8-4" />
          <path opacity=".25" d="M0 1l8 4 8-4" />
        </g>
      </svg>
    </span>
  );
};

export default CustomSvg;
