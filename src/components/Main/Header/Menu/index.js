import React from "react";
import styled from "styled-components";
import {FormattedMessage} from "react-intl";
import messages from "./messages";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import {NavLink} from "react-router-dom";

const MenuWrap = styled.div`
    
`;

const menu = [
    {
        title: <FormattedMessage {...messages.contact}/>
    }
];

function MenuView() {

    return (
        <MenuWrap>
            <MenuList>
                {menu.map((m, mI) => {
                    return (
                        <MenuItem key={mI}>
                            <NavLink to={"/contact"}>
                                {m.title}
                            </NavLink>
                        </MenuItem>
                    )
                })}
            </MenuList>

        </MenuWrap>
    );
}

export default MenuView;
