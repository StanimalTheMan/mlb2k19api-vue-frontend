<template>
    <div>
        <h3>Enter a pitcher's name</h3>
        <PlayerForm @handleSubmit="handleSubmit($event)" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PlayerForm from './PlayerForm';

export default {
    name: "PitcherForm",
    components: {
        PlayerForm
    },
    methods: {
        ...mapActions(['fetchPitcher']),
        handleSubmit: function(formValues) {
            this.$store.dispatch('fetchPitcher', {formValues});
        }
    },
    computed: mapGetters["getPlayerStats"]
}
</script>