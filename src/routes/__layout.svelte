<script>
  import { session } from "$app/stores";
  import decode from "jwt-decode";
  import {
    App,
    Avatar,
    ProgressLinear,
    Sidebar,
    Navbar,
    Dialog,
    Footer,
    Snack,
    Head,
  } from "$comp";
  import { show, user, password, token } from "$lib/store";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { publicPages } from "$lib/utils";

  let open = false;
  let ready;

  $user = $session.user;
  $token = $session.jwt;

  onMount(async () => {
    ready = true;

    if (!$password) $password = window.sessionStorage.getItem("password");
  });

  let y;

</script>

<style global src="../main.css">
</style>

<svelte:window bind:scrollY={y} />

<Head />
<Snack />

{#if ready}
  <Sidebar bind:open />
  <div class={y > 50 ? 'sticky' : ''} in:fade>
    <Navbar bind:sidebar={open} />
  </div>
  <Dialog />

  <main>
    <div class="mx-auto min-h-screen">
      <App>
        <slot />
      </App>
    </div>
  </main>

  <Footer />
{/if}
