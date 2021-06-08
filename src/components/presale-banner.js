import * as React from "react";
import Banner, { BannerUnit } from "./banner";
import { format, formatDistanceToNowStrict } from "date-fns";

export const presaleStartTime = 1623542400000;
export const presaleEndTime = 1624752000000;

export default function PresaleBanner() {
  const getDuration = () =>
    Date.now() > presaleStartTime
      ? Date.now() > presaleEndTime
        ? "Presale over"
        : formatDistanceToNowStrict(new Date(presaleEndTime))
      : formatDistanceToNowStrict(new Date(presaleStartTime));

  const [duration, setDuration] = React.useState(getDuration());
  const [intervalId, setIntervalId] = React.useState(null);

  function updateDuration() {
    setDuration(getDuration());
  }

  React.useEffect(() => {
    if (!intervalId) {
      setIntervalId(setInterval(updateDuration, 1000));
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [setIntervalId, intervalId]);

  return (
    <Banner>
      <BannerUnit>
        <h1 style={{ fontFamily: "monospace" }}>{duration}</h1>
        <p>{Date.now() > presaleStartTime ? "Time left" : "Time to presale"}</p>
      </BannerUnit>
      <BannerUnit>
        <h1>{format(new Date(presaleStartTime), "yyyy/MM/dd")}</h1>
        <p>$XAI Presale Launch</p>
      </BannerUnit>
      <BannerUnit>
        <h1>{format(new Date(presaleEndTime), "yyyy/MM/dd")}</h1>
        <p>$XAI Presale End</p>
      </BannerUnit>
    </Banner>
  );
}
