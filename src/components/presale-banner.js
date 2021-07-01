import * as React from "react";
import Banner, { BannerUnit } from "./banner";
import { format, formatDistanceToNowStrict } from "date-fns";

export const presaleStartTime = 1625356800000;
export const presaleEndTime = 1625961600000;

export const rhoPresaleStartTime = 1628467200000;
export const rhoPresaleEndTime = 1629072000000;

export default function PresaleBanner() {
  const getDuration = React.useCallback(
    () =>
      Date.now() > presaleStartTime
        ? Date.now() > presaleEndTime
          ? "Presale over"
          : formatDistanceToNowStrict(new Date(presaleEndTime))
        : formatDistanceToNowStrict(new Date(presaleStartTime)),
    []
  );

  const [duration, setDuration] = React.useState(getDuration());
  const [intervalId, setIntervalId] = React.useState(null);

  const updateDuration = React.useCallback(() => {
    setDuration(getDuration());
  }, [setDuration, getDuration]);

  React.useEffect(() => {
    if (!intervalId) {
      setIntervalId(setInterval(updateDuration, 1000));
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [setIntervalId, intervalId, updateDuration]);

  return (
    <Banner to="/presale" id="presale-status">
      <BannerUnit>
        <h1>{duration}</h1>
        <p><span aria-hidden="true" role="img">🕓</span> {Date.now() > presaleStartTime ? "Time left" : "Time to presale"}</p>
      </BannerUnit>
      <BannerUnit>
        <h1>{format(new Date(presaleStartTime), "yyyy/MM/dd")}</h1>
        <p><span aria-hidden="true" role="img">🗓</span> $XAI Presale Launch</p>
      </BannerUnit>
      <BannerUnit>
        <h1>{format(new Date(presaleEndTime), "yyyy/MM/dd")}</h1>
        <p><span aria-hidden="true" role="img">📅</span> $XAI Presale End</p>
      </BannerUnit>
    </Banner>
  );
}
