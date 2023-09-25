"use client"

import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export default function ReduxProvider({children}: PropsWithChildren<any>) {
    return <Provider store={store}>{children}</Provider>;
} 