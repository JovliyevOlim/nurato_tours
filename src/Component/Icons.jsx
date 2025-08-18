import React from 'react';
import {CgMail} from "react-icons/cg";
import {FaInstagram, FaTripadvisor} from "react-icons/fa";
import {LuFacebook} from "react-icons/lu";
import {Link} from "react-router-dom";

function Icons(props) {
    return (
        <>
            <Link target={"_blank"} to="mailto:davronn340@gmail.com">
                <CgMail className={'icon'}/>
            </Link>
            <Link target={"_blank"} to={'trip'}>
                <FaTripadvisor className={'icon'}/>
            </Link>
            <Link target={"_blank"} to={'https://www.facebook.com/share/1CXBKzaL4b/?mibextid=wwXIfr'}>
                <LuFacebook className={'icon'}/>
            </Link>
            <Link target={"_blank"} to={'https://www.instagram.com/nosir_davranov/?utm_source=ig_web_button_share_sheet'}>
                <FaInstagram className={'icon'}/>
            </Link>
        </>
    );
}

export default Icons;