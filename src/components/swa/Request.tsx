import { Verbindung } from '../../state/transport/to';

export const fetchData = async (einstieg: string) => {
  const alleVerbindungen: Array<Verbindung> = [];

  const date = new Date();
  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const year = date.getFullYear();
  const dateString = `${day}.${month}.${year}`;

  const hour = (`0${date.getHours()}`).slice(-2);
  const minute = (`0${date.getMinutes()}`).slice(-2);
  const currentTime = hour + minute;
  // https://cors-anywhere.herokuapp.com/https://www.api.com/
  // return fetch("http://localhost:8010/proxy/avv2/XSLT_DM_REQUEST", {

  /*

    return fetch("https://thingproxy.freeboard.io/fetch/https://efa.avv-augsburg.de/avv2/XSLT_DM_REQUEST", {
        //  const res = fetch("https://efa.avv-augsburg.de/avv2/XSLT_TRIP_REQUEST2?sessionID=0&requestID=0&language=de&commonMacro=true&canChangeMOT=0&type_origin=any&type_destination=any&trITMOTvalue100=10&useProxFootSearch=1",
        headers: {
        */
  //   accept: "*/*",
  /*
            "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
            //"sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        referrer: "https://efa.avv-augsburg.de/avv2/XSLT_TRIP_REQUEST2",
        referrerPolicy: "strict-origin-when-cross-origin",
        body:
            "language=de&deleteAssignedStops_dm=1&trITMOTvalue100=10&useProxFootSearch=0&itdLPxx_today=18&mode=direct&lsShowTrainsExplicit=0&type_dm=any&name_dm=" +
            einstieg +
            "&includedMeans=checkbox&inclMOT_0=1&inclMOT_1=1&inclMOT_2=1&inclMOT_3=1&inclMOT_4=1&inclMOT_5=1&inclMOT_6=1&inclMOT_7=1&inclMOT_8=1&inclMOT_9=1&inclMOT_10=1&inclMOT_11=1&commonMacro=true&itdLPxx_depOnly=1&" +
            "itdDateDayMonthYear=" +
            dateString +
            "& maxAssignedStops=1& hideBannerInfo=1& execInst=normal& limit=15 &" +
            "itdTime=" +
            currentTime +
            "& useAllStops=1",
        method: "POST",
        mode: "no-cors",
        credentials: "omit"
        //Response.text gibt das dokument als plain html zurück
        //div class "mdv_departureInformations" enthält alle erhaltenen Abfahrtszeiten
    }).then((awaitedResponse) => awaitedResponse.text())
        .then((response) => {

            for (let i = 0; i < 10; i++) {
                let elem = response.indexOf("dmTr");
                response = response.slice(elem, response.length);
                console.log(response)
                let abfahrtsZeitIndex = response.indexOf("time ");
                let abfahrtsZeit = response.slice(abfahrtsZeitIndex + 38, abfahrtsZeitIndex + 43);
                let linieIndex = response.indexOf("mdv_singleDepInfo");
                let linieEndIndex = response.indexOf("Bstg.");
                let linieNummer = response.slice(linieIndex + 19, linieIndex + 22).replace("/", "").trim()
                let ziel = response.slice(linieIndex + "mdv_singleDepInfo".length + 6, linieEndIndex);
                let verbindung = {
                    time: abfahrtsZeit,
                    linie: linieNummer,
                    ziel: ziel
                };
                alleVerbindungen.push(verbindung);
                response = response.slice(5, response.length);
            }
            return alleVerbindungen;
        });
}

*/

  return fetch(`/avv/${einstieg}/${dateString}/${currentTime}`)
    .then((awaitedResponse) => {
      console.log(awaitedResponse);
      return awaitedResponse.text();
    })
    .then((response) => {
      for (let i = 0; i < 10; i++) {
        const elem = response.indexOf('dmTr');
        response = response.slice(elem, response.length);
        const abfahrtsZeitIndex = response.indexOf('time ');
        const abfahrtsZeit = response.slice(abfahrtsZeitIndex + 38, abfahrtsZeitIndex + 43);
        const linieIndex = response.indexOf('mdv_singleDepInfo');
        const linieEndIndex = response.indexOf('Bstg.');
        const linieNummer = response.slice(linieIndex + 19, linieIndex + 22).replace('/', '').trim();
        const ziel = response.slice(linieIndex + 'mdv_singleDepInfo'.length + 6, linieEndIndex);
        const verbindung = {
          time: abfahrtsZeit,
          linie: linieNummer,
          ziel,
        };
        alleVerbindungen.push(verbindung);
        response = response.slice(5, response.length);
      }
      return alleVerbindungen;
    });
};
