/* eslint-disable */
import React, { FC } from "react";
import Header from "./Header";
import './BaseLayout.css'
// import Footer from "./Footer";
// import { Helmet } from "react-helmet";

interface Props {
    children: React.ReactNode
}

const BaseLayout: FC<Props> = ({children}) => {
    return (
        <React.Fragment>
            {children}

        </React.Fragment>
    )
};

export default BaseLayout;