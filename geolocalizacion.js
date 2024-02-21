const d = document,
n = navigator;


export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        Timeout: 5000,
        maximumAge: 0
    };
    const success = position => {
        let coords = position.coords;
        console.log(position);

        $id.innerHTML = `<p>Tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud <b>${coords.longitude}</b></li>
            <li>Precision <b>${coords.accuracy}</b>Metros</li>
        </ul>
        <a href= "https://www.google.com.co/maps/@${coords.latitude}, ${coords.longitude}, 10z" target =*_blank rel="noopener"> ver en Google maps </a>`;
    }
    const error = (err) => {
        $id.innerHTML = `<p> <mark> Error ${err.code}: ${err.message}</p> </mark>`;
        console.log(`Error ${err.code}: ${err.message}`);
    };
    n.geolocation.getCurrentPosition(success, error, options);
}