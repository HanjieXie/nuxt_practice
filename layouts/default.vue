<template>
    <div>
        <nav class="nav_container">
            <div class="link_style">
                <nuxt-link to="/">Home</nuxt-link>
            </div>
            <div class="link_style">
                <nuxt-link to="/detail/1">Detail</nuxt-link>
            </div>
        </nav>
        <!-- 占位符插槽 -->
        <slot></slot>
    </div>
</template>
<style scoped>
.nav_container {
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #afafaf;
    display: flex;
    padding: 10px 10px 0 10px;
}
.link_style{
    margin-left: 10px;
}
</style>