<script lang="ts">
	import routes from './routes'

    // Компоненты
    import Router from 'svelte-spa-router'
    import fetchApi from './utils/fetchApi'
    import apiRepository from './utils/apiRepository'

    (await fetchApi(apiRepository.geozone.organizationById, {
        params: {
            id: ''
        },
        query: {
            page: 45
        }
    }))
</script>

<Router {routes}/>
