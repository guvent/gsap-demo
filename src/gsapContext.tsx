import React from 'react';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

export const GsapContext: React.Context<any> = React.createContext<any>(null);

export const GsapContextProvider = ({ children }: { children: any }) => {
    gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase);

    gsap.registerEffect({
        name: "fade",
        effect: (targets: any, config: any) => {
            return gsap.to(targets, { duration: config.duration, opacity: 0 });
        },
        defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
        extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    });

    return (
        <GsapContext.Provider value={gsap}>
            {children}
        </GsapContext.Provider>
    )
}