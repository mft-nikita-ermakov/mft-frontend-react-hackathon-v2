import Cookies from "js-cookie";

export async function useLogout() {

    Cookies.remove('jwt');
    Cookies.remove('role');
    console.log("Cookies is dead!");

    localStorage.removeItem('currentUsername');
    localStorage.removeItem('userDictionary');
    localStorage.removeItem('companyDictionary');
    localStorage.removeItem('trailerDataCompany');
    localStorage.removeItem('truckDataCompany');
    localStorage.removeItem('roleOfParticipant');
    localStorage.removeItem('truckData');
    console.log("LocalStorage is dead!");

    window.location.href = '/';
}