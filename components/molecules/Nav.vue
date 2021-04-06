<template>
  <v-card>
    <v-tabs center-active optional show-arrows centered>
      <v-tab
        v-for="letter in letters"
        :key="letter"
        @click="() => filterByLetter(letter)"
        >{{ letter }}</v-tab
      >
    </v-tabs>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    letters() {
      const breeds = this.$store.state.breeds
        .map((breed) => breed.name.charAt(0))
        .sort()
      return new Set(breeds)
    },
  },
  methods: {
    ...mapMutations({
      filterByLetter: 'FILTER_BY_LETTER',
    }),
  },
}
</script>
