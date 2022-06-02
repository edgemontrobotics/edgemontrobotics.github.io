<script context="module">
</script>


<script>
    import './global.css';
    import Footer from "../components/footer.svelte";
    import Navbar from "../components/navbar.svelte";
    import AOS from "../components/aos.svelte";
</script>


<Navbar />
    <slot />
<Footer />
