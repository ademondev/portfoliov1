import * as React from "react";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    logo: {

    }
}));

const LoadingLogo: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
    const { classes } = useStyles();
    return (
        <svg
            width={135.611}
            height={140.706}
            viewBox="0 0 35.88 37.228"
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
                transform="matrix(1.02576 0 0 1.02576 -55.41 -59.178)"
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
                transform="matrix(1.02576 0 0 1.02576 -55.41 -59.178)"
            />
        </svg>
    );
}

export default LoadingLogo;