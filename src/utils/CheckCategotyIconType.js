import React from "react";
import Historical from "../../assets/icons/categories/historical.svg";
import HistoricalWhite from "../../assets/icons/categories/historical_white.svg";
import Religious from "../../assets/icons/categories/religious.svg";
import ReligiousWhite from "../../assets/icons/categories/religious_white.svg";
import Scientific from "../../assets/icons/categories/scientific.svg";
import ScientificWhite from "../../assets/icons/categories/scientific_white.svg";
import General from "../../assets/icons/categories/general.svg";
import GeneralWhite from "../../assets/icons/categories/general_white.svg";
import Sports from "../../assets/icons/categories/sports.svg";
import SportsWhite from "../../assets/icons/categories/sports_white.svg";
import Technology from "../../assets/icons/categories/technology.svg";
import TechnologyWhite from "../../assets/icons/categories/technology_white.svg";
import Default from "../../assets/icons/categories/default.svg";
import DefaultWhite from "../../assets/icons/categories/default_white.svg";

function CheckCategoryIconType(type, iconWidth, iconHeight, color = '') {
    switch (type) {
        case 'historical':
            if (color !== 'white') {
                return <Historical width={iconWidth} height={iconHeight} />
            } else {
                return <HistoricalWhite width={iconWidth} height={iconHeight} />
            }
        case 'religious':
            if (color !== 'white') {
                return <Religious width={iconWidth} height={iconHeight} />;
            } else {
                return <ReligiousWhite width={iconWidth} height={iconHeight} />
            }
        case 'scientific':
            if (color !== 'white') {
                return <Scientific width={iconWidth} height={iconHeight} />;
            } else {
                return <ScientificWhite width={iconWidth} height={iconHeight} />
            }
        case 'general':
            if (color !== 'white') {
                return <General width={iconWidth} height={iconHeight} />;
            } else {
                return <GeneralWhite width={iconWidth} height={iconHeight} />
            }
        case 'sports':
            if (color !== 'white') {
                return <Sports width={iconWidth} height={iconHeight} />;
            } else {
                return <SportsWhite width={iconWidth} height={iconHeight} />
            }
        case 'technology':
            if (color !== 'white') {
                return <Technology width={iconWidth} height={iconHeight} />;
            } else {
                return <TechnologyWhite width={iconWidth} height={iconHeight} />
            }
        default:
            if (color !== 'white') {
                return <Default width={iconWidth} height={iconHeight} />;
            } else {
                return <DefaultWhite width={iconWidth} height={iconHeight} />
            }

    }
}

export default CheckCategoryIconType;
