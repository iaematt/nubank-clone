import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import qrcode from '../../assets/qrcode.png';


import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }) {
    return(
        <Container
            style={{
                opacity: translateY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, 1],
                }),
            }}
        >
            <Code>
                <Image source={qrcode} />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFFFFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFFFFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFFFFF" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFFFFF" />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>
                    Sair do app
                </SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}