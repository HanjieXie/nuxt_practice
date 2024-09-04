<template>
    <div class="container">
        <header>
            <h1>网站标题</h1>
            <nav>
                <ul>
                    <li>
                        <NuxtLink class="NuxtLinkStyle" to="/">首页</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="NuxtLinkStyle" to="/message">信息页</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="NuxtLinkStyle" to="/about">关于页</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <nuxt />
        </main>
        <footer>
            <p>版权信息 © 2024</p>
        </footer>
    </div>

</template>

<style scoped>
/* styles for the header */
header {
    background: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

header nav ul li {
    display: inline;
    margin-right: 1rem;
}

header nav ul li a {
    color: white;
    text-decoration: none;
}

header nav ul li a:hover {
    text-decoration: underline;
}

main {
    flex: 1;
    padding: 1rem;
}

/* styles for the footer */
footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 1rem;
}

.borderLine {
    border: 1px solid #afafaf;
}

.navStyle {
    display: flex;
    flex-direction: row;
}

.ListItemsStyle {
    width: 10%;
    list-style-type: none !important;

}

.NuxtLinkStyle {
    text-decoration: none !important;
    color: cornflowerblue !important;
}

.NuxtLinkStyle:hover {
    text-decoration: none !important;
    color: #afafaf !important;
}
</style>
