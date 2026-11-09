const DEPLOY_URL = "http://washingtonr.moraviancs.click";

const API_BASE =
  location.hostname === "127.0.0.1" || location.hostname === "localhost"
    ? "http://127.0.0.1:5000"
    : DEPLOY_URL;
