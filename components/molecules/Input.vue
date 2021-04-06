<template>
  <v-card>
    <v-text-field
      v-model="term"
      label="Digite aqui o termo para busca"
    ></v-text-field>
    <v-radio-group v-if="filteredBreeds.length" v-model="checkedSub" row>
      <template v-for="breed in filteredBreeds">
        <v-radio
          v-for="sub in breed.sub"
          :key="breed.name + ' ' + sub"
          :label="breed.name + ' ' + sub"
          :value="{ sub, origin: breed.name }"
          class="my-1 term"
        ></v-radio>
      </template>
    </v-radio-group>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      term: '',
      checkedSub: {},
    }
  },
  computed: {
    filteredBreeds() {
      if (!this.term.length) return []
      const filteredBreeds = this.$store.state.breeds.filter(
        (breed) =>
          !!breed.sub.length && breed.name.toLowerCase().includes(this.term.toLowerCase())
      )
      return filteredBreeds
    },
  },
  watch: {
    checkedSub(value) {
      this.term = `${value.origin} | ${value.sub}`
    },
    term(value) {
      this.filterByTerm(value.toLowerCase())
    },
  },
  methods: {
    ...mapMutations({
      filterByTerm: 'FILTER_BY_TERM',
    }),
  },
}
</script>

<style lang="scss" scoped>
.term {
  text-transform: capitalize;
}
</style>
