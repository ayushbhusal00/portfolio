"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "v0mbtxb1ye";

export default function MicrosoftClarity() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Clarity.init(CLARITY_PROJECT_ID);
      Clarity.consentV2({
        ad_Storage: "granted",
        analytics_Storage: "granted",
      });
    }
  }, []);

  return null;
}
