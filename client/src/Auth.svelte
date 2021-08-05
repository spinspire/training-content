<script>
  import { alerts } from "./lib/components/Alerts.svelte";

  import { user } from "./lib/firebase";
  import {getLocation, updateLocation} from './lib/firebase/firestore/';

  const updateLastLocationMessage = async () => {
    const {title, url} = await getLocation($user);
    if (title && url){
      const message = `Last Location: ${title} \n <a href="${url}">LINK</a>`;
      alerts.add("success", message);
    }
  };


  $: if($user) {
    document.body.classList.add("user-logged-in");

    console.log("checking for user")

    updateLastLocationMessage();
  } else {
    document.body.classList.remove("user-logged-in");
  }

  let timer = null;
  const LOCATION_SAVE_TIMEOUT = 5000;

  // we want to remember current location in firebase
  // watch "swup:contentReplace" event which triggers on each page navigation
  document.addEventListener('swup:contentReplaced', (event) => {
    // clear previous timer if any
    if(timer) {
      clearTimeout(timer);
    }
    if ($user) { // only if we are logged in
      const [_, learn, coursePrefix, courseName, section] = document.location.pathname.split('/');
      // are we in a place that we would like to remember?
      if(coursePrefix === "course" && !!section) {
        // remember only if we are under course/[course-name]/[section]
        const prevLocation = window.location.href;
        timer = setTimeout(async () => {
          const newLocation = window.location.href;
          // Are we still logged in, and are we still on the same page after timeout?
          if ($user && prevLocation === newLocation) {
            await updateLocation($user, newLocation, document.title);
          }
        }, LOCATION_SAVE_TIMEOUT);
      }
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
