// JavaScript source code

//Herokuapp wird als Proxy benutzt, um CORS headers zu setzen und so die blockierte Browser zu Server-Verbindung zu umgehen
//-> nimmt die tatsächlich abgefragte URL als Parameter
//Suchparameter wie Abfahrtszeit etc. werden als Formdaten mitgegeben
//Komplette Fetch Methode wurde aus den DevTools-> Network-> XSLT_DM_REQUEST kopiert
//AVV-URL für fie Anfragen: https://efa.avv-augsburg.de/avv2/XSLT_TRIP_REQUEST2


//TODO: Delete this class, now using Request.tsx
export async function fetchAvvdata() {
    var alleVerbindungen = {};
    var verbindungsArray = [];
    alleVerbindungen.verbindungsArray = verbindungsArray;
    var date = new Date();
    var day = date.getDate();
    day = ("0" + day).slice(-2);
    var month = date.getMonth() + 1;
    month = ("0" + month).slice(-2);
    var year = date.getFullYear();
    var dateString = day + "." + month + "." + year;

    var hour = date.getHours().toString();
    hour = ("0" + hour).slice(-2);
    var minute = date.getMinutes();
    minute = ("0" + minute).slice(-2);
    var currentTime = hour + minute;

    //Bevor das funktioniert: in node_modules/cors-anywhere/lib   "npm run start" ausführen
    const res = fetch("http://localhost:8010/proxy/avv2/XSLT_DM_REQUEST", {
    //  const res = fetch("https://efa.avv-augsburg.de/avv2/XSLT_TRIP_REQUEST2?sessionID=0&requestID=0&language=de&commonMacro=true&canChangeMOT=0&type_origin=any&type_destination=any&trITMOTvalue100=10&useProxFootSearch=1",
        headers: {
            accept: "*/*",
            "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        referrer: "https://efa.avv-augsburg.de/avv2/XSLT_TRIP_REQUEST2",
        referrerPolicy: "strict-origin-when-cross-origin",
        body:
            "language=de&deleteAssignedStops_dm=1&trITMOTvalue100=10&useProxFootSearch=0&itdLPxx_today=18&mode=direct&lsShowTrainsExplicit=0&type_dm=any&name_dm=2000116&includedMeans=checkbox&inclMOT_0=1&inclMOT_1=1&inclMOT_2=1&inclMOT_3=1&inclMOT_4=1&inclMOT_5=1&inclMOT_6=1&inclMOT_7=1&inclMOT_8=1&inclMOT_9=1&inclMOT_10=1&inclMOT_11=1&commonMacro=true&itdLPxx_depOnly=1&" +
            "itdDateDayMonthYear=" +
            dateString +
            "& maxAssignedStops=1& hideBannerInfo=1& execInst=normal& limit=15 &" +
            "itdTime=" +
            currentTime +
            "& useAllStops=1",
        method: "POST",
        mode: "cors",
        credentials: "omit"
        //Response.text gibt das dokument als plain html zurück
        //div class "mdv_departureInformations" enthält alle erhaltenen Abfahrtszeiten
    });

    await res
        .then((awaitedResponse) => awaitedResponse.text())
        .then((response) => {
            //console.log(response);

            for (var i = 0; i < 10; i++) {
                var elem = response.indexOf("dmTr");
                response = response.slice(elem, response.length);
                var abfahrtsZeitIndex = response.indexOf("time ");
                var abfahrtsZeit = response.slice(abfahrtsZeitIndex + 7, abfahrtsZeitIndex + 12);
                var linieIndex = response.indexOf("mdv_singleDepInfo");
                var linieEndIndex = response.indexOf("Bstg.");
                var linieNummer = response.slice(linieIndex + "mdv_singleDepInfo".length + 2, linieIndex + "mdv_singleDepInfo".length + 3);
                var ziel = response.slice(linieIndex + "mdv_singleDepInfo".length + 6, linieEndIndex);
                var verbindung = {
                    time: abfahrtsZeit,
                    linie: linieNummer,
                    ziel: ziel
                };
                alleVerbindungen.verbindungsArray.push(verbindung);
                response = response.slice(5, response.length);
            }
            return alleVerbindungen;
        });
}

