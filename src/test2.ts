import * as rp from 'request-promise';

async function getIP(): Promise<string> {
    try {
        let data = await rp.get({url: 'http://ipinfo.io/ip'});

        return data;
    } catch (err) {
        console.log(err);

        return undefined;
    }
}

getIP().then((ip) => {
    console.log('My IP: ' + ip);
});
