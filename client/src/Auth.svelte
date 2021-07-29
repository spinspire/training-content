<script>
  import { user } from "./lib/firebase";
// Displays modal if logged in
  $: if($user) {
    document.body.classList.add("user-logged-in");
  } else {
    document.body.classList.remove("user-logged-in");
  }
</script>

<div class="btn-group firebase-auth">
  {#if $user}
    <img class="profile-pic"
      src={$user.photoURL}
      alt="{$user.displayName}'s profile picture."
      title="{$user.displayName}'s profile picture."
    />
    <button on:click|preventDefault={user.logout} class="btn btn-secondary">Log Out</button>
  {:else}
    <div class="profile-pic"></div>
    <button on:click|preventDefault={user.login} class="btn btn-secondary">Login</button>
  {/if}
</div>

<style>
  .firebase-auth {
    display: flex;
    height: 3rem;
  }
  .profile-pic {
    display: inline-block;
    width: 3rem;
  }
  .btn {
    width: 6em;
  }
</style>
