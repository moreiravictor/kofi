import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
    background-color: #21130d;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 30px;
`;

export const KofiTextStyle = StyleSheet.create({text: {fontSize: 30, color: '#fff', fontFamily: "serif"}})