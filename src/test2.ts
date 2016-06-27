import * as rp from 'request-promise';

async function getIP() {
    try {
        let data = await rp.get({url: 'http://ipinfo.io/ip'});

        return data;
    } catch (err) {
        console.log(err);

        return undefined;
    }
}

let ip = getIP();
console.log('My IP: ' + ip);
