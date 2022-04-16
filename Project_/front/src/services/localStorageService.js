
function setToken(token) {
    localStorage.setItem("ACCESS_TOKEN", token);
}

function getToken() {
    return localStorage.getItem("ACCESS_TOKEN");
}

function removeToken() {
    localStorage.removeItem("ACCESS_TOKEN");
    // localStorage.removeItem("code");
}

function getRole() {
    if (getToken()) {
        if (localStorage.getItem("code") == 'Supervisor') {
            return "Supervisor";
        } else if (localStorage.getItem("code") == 'Non-invasive' || localStorage.getItem("code") == 'Cath-Lab') {
            return 'NonCath';
        } else {
            return localStorage.getItem("code");
        }
    } else {
        return "guest";
    }
}

export default {
    setToken,
    getToken,
    removeToken,
    getRole,
};