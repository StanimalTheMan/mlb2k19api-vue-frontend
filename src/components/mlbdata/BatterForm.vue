<template>
    <div>
        <h3>Enter a batter's name</h3>
        <PlayerForm @handleSubmit="handleSubmit($event)" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PlayerForm from './PlayerForm';

export default {
    name: "BatterForm",
    components: {
        PlayerForm
    },
    methods: {
        ...mapActions(['fetchBatter']),
        handleSubmit: function (formValues) {
            this.$store.dispatch('fetchBatter', {formValues});
        }
    },
    computed: mapGetters["getPlayerStats"]
}
</script>