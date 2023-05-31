import App from './App.svelte'

// Импорт стилей (если не нужно импортировать несколько, удалить комментарий)
import './app.sass'

export default new App({
    target: document.getElementById('fleetly') // ;)
})
