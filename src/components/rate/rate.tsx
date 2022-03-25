import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as StarHalf } from "../../assets/icons/star-half.svg";

import "./rate.scss";
import { getDecimalsOnly, getStarType } from "../../utils/math.utils";

interface RateProps {
  rate: number;
}

const Rate = ({ rate }: RateProps) => {
  const stars: JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    const currentStar = rate - i;
    if (currentStar > 0) stars.push(<FilledStar />);
    else if (currentStar < 1 && !Number.isInteger(currentStar)) {
      const star = getStarFromDecimal(rate);
      stars.push(star);
      rate = rate - getDecimalsOnly(rate);
    } else {
      stars.push(<EmptyStar />);
    }

    // //handle filled stars
    // if (i < Math.trunc(rate)) {
    //   stars.push(<Star fill="#FEBE02" />);
    //   continue;
    // }

    // //handle decimal star
    // if (i - rate < 1) {
    //   const decimals = getDecimalsOnly(rate);
    //   if (decimals !== 0) {
    //     switch (getStarType(decimals)) {
    //       case 0:
    //         stars.push(<FilledStar />);
    //         break;
    //       case 0.5:
    //         stars.push(<StarHalf className="star-icon" />);
    //         break;
    //       case 1:
    //         stars.push(<EmptyStar />);
    //         break;
    //     }
    //     continue;
    //   }
    // }

    // //handle empty star
    // stars.push(<EmptyStar />);
  }

  return <>{stars}</>;
};
const FilledStar = () => <Star className="star-icon" fill="#FEBE02" />;
const EmptyStar = () => <Star className="star-icon" fill="#A8A8A8" />;
const getStarFromDecimal = (rate: number) => {
  switch (getStarType(rate)) {
    case 0:
      return <FilledStar />;
    case 0.5:
      return <StarHalf className="star-icon" />;
    case 1:
      return <EmptyStar />;
  }
};

export default Rate;
