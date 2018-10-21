import React, { Component } from 'react';
import Navbutton from './Navbutton';
import store from './../../../stores/MainStore';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

class Navbar extends Component {
    render() {
        return (
            <NavbarWrapper>
                <Navbutton text="Linki" store={store} />
                <Navbutton text="Notatki" store={store} />
                {process.env.REACT_APP_CALENDAR_IFRAME && (
                    <Navbutton pageChange text="Kalendarz" store={store} />
                )}
            </NavbarWrapper>
        );
    }
}

export default observer(Navbar);
