import { createStyles } from "@mantine/core";
import * as React from "react";

const useStyles = createStyles((theme) => ({
  logo: {
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      filter: "drop-shadow(0 0 0.5em #006daa)"
    },
    fontWeight: 900
  }
}));

const MainLogo = (props: React.SVGProps<SVGSVGElement>) => {
  const { classes } = useStyles();
  return (
    (<a href="#">
      <svg
        width={516.316}
        height={112.173}
        viewBox="0 0 136.609 29.679"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: 'transparent' }}
        className={classes.logo}
        {...props}
      >
        <defs>
          <path id="b" d="M306 296h205v65H306z" />
          <path id="a" d="M295 210h270v140H295z" />
        </defs>
        <path
          style={{
            fill: "#333",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: ".264583px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="M71.408 57.692 85.73 89.74l-8.762-5.965-5.493-12.435-5.358 12.3-9.166 6.134z"
          transform="matrix(.81775 0 0 .81775 -44.174 -47.178)"
        />
        <path
          style={{
            fill: "#3b5c99",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: ".264583px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="m54.02 93.986 17.32-5.021 17.658 4.987-17.658-11.76Z"
          transform="matrix(.81775 0 0 .81775 -44.174 -47.178)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontSize: "19.2722px",
            lineHeight: 1.25,
            fontFamily: "'swis721-blk-bt-black', sans-serif",
            fill: "#333",
            fillOpacity: 1,
            strokeWidth: 0.481808,
          }}
          x={64.954}
          y={73.794}
          transform="matrix(.81775 0 0 .81775 -23.98 -46.336)"
        >
          <tspan
            style={{
              fill: "#333",
              fillOpacity: 1,
              strokeWidth: 0.481808,
            }}
            x={64.954}
            y={73.794}
          >
            {"ALEJANDRO"}
          </tspan>
          <tspan
            style={{
              fill: "#333",
              fillOpacity: 1,
              strokeWidth: 0.481808,
            }}
            x={64.954}
            y={97.884}
            dy={-8.225}
          >
            {"PEDEMONTE"}
          </tspan>
        </text>
      </svg>
    </a>
    )
  )
}

export default MainLogo;
