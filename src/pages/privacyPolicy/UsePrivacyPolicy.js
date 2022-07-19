import React, { useState } from 'react';

export default function UsePrivacyPolicy() {
    const data = [
        {
            id: 1,
            state: false,
        },
        {
            id: 2,
            state: false,
        },
        {
            id: 3,
            state: false,
        },
        {
            id: 4,
            state: false,
        },
        {
            id: 5,
            state: false,
        },
        {
            id: 6,
            state: false,
        },
        {
            id: 7,
            state: false,
        },
        {
            id: 8,
            state: false,
        },
        {
            id: 9,
            state: false,
        },
        {
            id: 10,
            state: false,
        },
        {
            id: 11,
            state: false,
        },
        {
            id: 12,
            state: false,
        },
        {
            id: 13,
            state: false,
        },
        {
            id: 14,
            state: false,
        },
        {
            id: 15,
            state: false,
        },
        {
            id: 16,
            state: false,
        },
    ]
    const[stateData,setStateData]=useState(data);
    return [{stateData,setStateData}]
}
