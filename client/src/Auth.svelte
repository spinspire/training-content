<script>
  import { user } from "./lib/firebase";
</script>

<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {#if $user }
        <li class="nav-item ">
          <p class="h1">{$user.displayName}</p>
        </li>
        <img
          class="profile-pic"
          src={$user.photoURL}
          alt="{$user.displayName}'s profile picture."
        />
        <li class="nav-item">
          <button on:click|preventDefault={user.logout}>Log Out</button>
        </li>
      {:else}
        <li class="nav-item">
          <button on:click|preventDefault={user.login}>Login</button>
        </li>
      {/if}
    </ul>
  </div>
</nav>
