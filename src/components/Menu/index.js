import React from 'react';
//import QRCode from 'react-native-qrcode-svg';

import { Container, Code } from './styles';

export default function Menu() {
    return(
        <Container>
            <Code>
                {/*<QRCode 
                    value="http://fb.me/iaematt"
                    size={80}
                    color="#8a00be"
                    backgroundColor="#FFFFFF"
                />*/}
            </Code>
        </Container>
    );
}