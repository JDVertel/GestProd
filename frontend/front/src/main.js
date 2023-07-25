import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

// iconos

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHome, FaRegularEdit,IoArchiveSharp,FaCog,IoInformationCircleSharp,BiTruck,RiCustomerService2Line,HiSolidUsers,LaProductHunt,HiDocumentReport,MdOutputOutlined,MdBordercolorOutlined,MdShoppingcartOutlined,SiMaterialdesignicons } from "oh-vue-icons/icons";

addIcons(FaHome, FaRegularEdit,IoArchiveSharp,FaCog,IoInformationCircleSharp,BiTruck,RiCustomerService2Line,HiSolidUsers,LaProductHunt,HiDocumentReport,MdOutputOutlined,MdBordercolorOutlined,MdShoppingcartOutlined,SiMaterialdesignicons );

const app = createApp(App)
app.component("v-icon",OhVueIcon);
app.use(router)

app.mount('#app')
