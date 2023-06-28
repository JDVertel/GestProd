import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

// iconos

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiScarecrow ,RiHealthBookLine,FaUserCheck,FaHandHoldingMedical,AiBiorxivSquare,IoConstructSharp, FaHome, HiCheck,BiWhatsapp} from "oh-vue-icons/icons";

addIcons(GiScarecrow ,RiHealthBookLine,FaUserCheck,FaHandHoldingMedical,AiBiorxivSquare,IoConstructSharp, FaHome, HiCheck,BiWhatsapp);

const app = createApp(App)
app.component("v-icon",OhVueIcon);
app.use(router)

app.mount('#app')
