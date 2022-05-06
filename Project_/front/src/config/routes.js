import HomePage from '../components/pages/Home';
import IndexPage from '../components/pages/Index';
import AddNon from '../components/non/index';
import AddCath from '../components/cath/addCath';
import SummaryPage from '../components/pages/Summary';
import OpdPage from '../components/opd/OPD';
import OrPage from '../components/or/OR.js';
import Download from '../components/Summary/download';
import service from '../components/Summary/services';

const components = {
    home: {
        url: "/",
        component: HomePage
    },
    index: {
        url: "/index",
        component: IndexPage,
    },
    addN: {
        url: "/non",
        component: AddNon
    },
    addC: {
        url: "/cath",
        component: AddCath
    },
    summary: {
        url: "/summary",
        component: SummaryPage
    },
    opd: {
        url: "/opd",
        component: OpdPage
    },
    or: {
        url: "/or",
        component: OrPage
    },
    load: {
        url: "/download",
        component: Download
    },
    service: {
        url: "/admin",
        component: service
    },
};

export default {
    guest: {
        allowedRoutes: [
            components.home
        ],
        redirectRoutes: "/"
    },
    Supervisor: {
        allowedRoutes: [
            components.summary,
            components.load,
            components.service
        ],
        redirectRoutes: "/summary"
    },
    NonCath: {
        allowedRoutes: [
            components.index,
            components.addN,
        ],
        redirectRoutes: "/index"
    },
    OR: {
        allowedRoutes: [
            components.or,
        ],
        redirectRoutes: "/or"
    },
    OPD: {
        allowedRoutes: [
            components.opd,
        ],
        redirectRoutes: "/opd"
    },
};