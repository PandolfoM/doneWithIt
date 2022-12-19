import Bugsnag from "@bugsnag/expo";

const log = (e) => Bugsnag.notify(e);

const start = () => Bugsnag.start();

export default {
  log,
  start,
};
