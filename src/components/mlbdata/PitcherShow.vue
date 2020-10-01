<template>
    <div v-if="isNotEmpty(getPlayerStats)">
        <p>{{getPlayerStats}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import _ from "lodash";

export default {
    name: "PitcherShow",
    computed: mapGetters(['getPlayerStats']),
    methods: {
        isNotEmpty(playerStats) {
            console.log(!_.isEmpty(playerStats));
            return !_.isEmpty(playerStats);
        }
    }
}
</script>

<style>

</style>