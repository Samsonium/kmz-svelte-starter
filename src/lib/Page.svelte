<style lang="sass" src="./page.sass"></style>
<script lang="ts">

    // ------------ [ Свойства ]

    /** Заголовок страницы */
    export let title: string = ''
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="page">
    <slot/>
</div>
