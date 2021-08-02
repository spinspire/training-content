<script>
  import { user } from "./lib/firebase";
  $: if($user) {
    document.body.classList.add("user-logged-in");
  } else {
    document.body.classList.remove("user-logged-in");
  }

  document.addEventListener('swup:contentReplaced', (event) => {
    if (document.body.classList.value === "user-logged-in"){
      const courses = ['js-apps', 'drupal'];
      const path = document.location.pathname.split('/');
      //Goes through the path and checks if inside course.
      courses.forEach(course => {
      /* Checks for path length as a "path" array length more 
      than 5 means we are in a course page. 
      This is seems inefficient and there is almost certainly 
      a better way to do this. */
        if(path.find(e => e == course) && path.length > 5){
          console.log('sent link');
          user.updateLocation();
        }
    });
    }
});


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
