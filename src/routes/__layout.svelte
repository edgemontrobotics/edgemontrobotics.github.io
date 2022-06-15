<script context="module">
</script>


<script>
// @ts-nocheck

    import './global.css';
    import Footer from "../components/footer.svelte";
    import Navbar from "../components/navbar.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Heebo:wght@300;400&family=Rubik&family=Viga&display=swap" rel="stylesheet"> 
</svelte:head>

<Navbar />
    <slot/>
<Footer />
