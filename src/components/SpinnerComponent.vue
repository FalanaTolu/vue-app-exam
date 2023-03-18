<template>
    <div class="loader-container">
        <trinity-rings-spinner :animation-duration="1500" :size="66" :color="'#19a6c3'" />
        <p>Loading...</p>
    </div>
</template>
  
<script>
import { TrinityRingsSpinner } from 'epic-spinners'

export default {
    components: {
        TrinityRingsSpinner
    }
}
</script>

<style>
.loader-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
}
</style>