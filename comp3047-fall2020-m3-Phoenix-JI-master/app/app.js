import Vue from 'nativescript-vue';

import QPON from './components/QPON';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;
global.baseUrl = "http://3d2478f56b16.ngrok.io";

global.username = "";

global.Malls =

    [
        {
            "name": "IFC Mall",
            "latitude": 22.2849,
            "longitude": 114.158917
        },
        {
            "name": "Pacific Place",
            "latitude": 22.2774985,
            "longitude": 114.1663225
        },
        {
            "name": "Times Square",
            "latitude": 22.2782079,
            "longitude": 114.1822994
        },
        {
            "name": "Elements",
            "latitude": 22.3048708,
            "longitude": 114.1615219
        },
        {
            "name": "Harbour City",
            "latitude": 22.2950689,
            "longitude": 114.1668661
        },
        {
            "name": "Festival Walk",
            "latitude": 22.3372971,
            "longitude": 114.1745273
        },
        {
            "name": "MegaBox",
            "latitude": 22.319857,
            "longitude": 114.208168
        },
        {
            "name": "APM",
            "latitude": 22.3121738,
            "longitude": 114.22513219999996
        },
        {
            "name": "Tsuen Wan Plaza",
            "latitude": 22.370735,
            "longitude": 114.111309
        },
        {
            "name": "New Town Plaza",
            "latitude": 22.3814592,
            "longitude": 114.1889307
        }
    ]
new Vue({

    template: `
        <Frame>
            <QPON />
        </Frame>`,

    components: {
        QPON
    }
}).$start();