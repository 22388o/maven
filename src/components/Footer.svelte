<script>
  import branding from '$lib/branding';
  
  let date = new Date();
  let year = date.getFullYear();
</script>

<div class="bg-black px-2 mt-24">
  <div class="container footer mx-auto flex flex-wrap text-white pt-12">
    <div
      class="flex flex-col text-sm w-full lg:w-2/4 mb-10 order-last lg:order-first">
      <a href="/"><img src="/maven.png" alt="logo" class="w-48" /></a>
      <p class="mt-4">&copy;{year} Maven</p>
    </div>
    <div class="w-full lg:w-1/4 mb-10">
      <h4 class="font-bold mb-4">Follow US</h4>
      <ul class="list-none">
        <li class="mb-2"><a target="_blank" href="{branding.urls.external.twitter}">Twitter</a></li>
        <li class="mb-2"><a target="_blank" href="{branding.urls.external.telegram}">Telegram</a></li>
        <li class="mb-2"><a target="_blank" href="{branding.urls.external.instagram}">Instagram</a></li>
      </ul>
    </div>
    <div class="w-full lg:w-1/4 mb-10">
      <h4 class="font-bold mb-4">Help</h4>
      <ul class="list-none">
        <li class="mb-2">
          <a href="https://blockstream.com/liquid/">The Liquid Network</a>
        </li>
        <li class="mb-2"><a href="mailto:it@mavennft.io">Support</a></li>
        <li class="mb-2"><a href="/privacy-policy">Privacy Policy</a></li>
        <li class="mb-2">
          <a href="/terms-and-conditions">Terms of Service</a>
        </li>
        <li class="mb-2"><a href="/faq">FAQs</a></li>
      </ul>
    </div>
  </div>
</div>
