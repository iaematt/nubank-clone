import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#8a00be" />

            <Header />

            <Content>
                <Menu />
                
                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666666" />
                        <Icon name="visibility-off" size={28} color="#666666" />
                    </CardHeader>

                    <CardContent>
                        <Title>Saldo disponível</Title>
                        <Description>R$ 197.611,65</Description>
                    </CardContent>

                    <CardFooter>
                        <Annotation>
                            Transferência de R$ 20,00 recebida de Diego Fernandes hoje as 06:00h
                        </Annotation>
                    </CardFooter>
                </Card>
            </Content>

            <Tabs />
        </Container>
    );
}