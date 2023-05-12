import React from "react";
import { Container, LoadingIcon, KofiTextStyle } from "./styles";
import { Text } from "react-native";

export default () => {
    return (
        <Container>
            <Text style={KofiTextStyle.text}>{"Kofi"}</Text>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}