//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-qinthar2024-48d72259230b.herokuapp.com/presensi/" + presensiId;