import NotFoundPage from './pages/NotFoundPage.svelte'

// Типы
import type {RouteDefinition} from 'svelte-spa-router'

/** Активные пути в роутере */
const routes: RouteDefinition = {
	
	// Обработка ошибок
	'*': NotFoundPage
}
export default routes
