import component from './index.vue'
import { App } from 'vue'
import './style/style.scss'

const install = (app: App) => {
	app.component('si-pagination', component)
}

export default { install }
