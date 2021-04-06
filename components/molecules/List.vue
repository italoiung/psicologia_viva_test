<template>
  <v-card>
    <template v-for="index in breedsToShow">
      <v-list-group
        v-if="breeds[index - 1].sub.length"
        :key="breeds[index - 1].name"
        :value="breeds.length > 3 ? false : true"
        no-action
        class="breed"
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title
              v-text="breeds[index - 1].name"
            ></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item :to="`/${breeds[index - 1].name}`" router exact>
          <v-list-item-content>
            <v-list-item-title v-text="'Ver todas'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="sub in breeds[index - 1].sub"
          :key="sub"
          :to="`/${breeds[index - 1].name}/${sub}`"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="sub"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item
        v-else
        :key="breeds[index - 1].name"
        :value="true"
        :to="`/${breeds[index - 1].name}`"
        router
        exact
        class="breed"
      >
        <v-list-item-content>
          <v-list-item-title
            v-text="breeds[index - 1].name"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-btn v-if="!finished" color="primary" @click="loadMore"
      >Carregar mais</v-btn
    >
  </v-card>
</template>

<script>
export default {
  props: {
    filterByLetter: {
      type: Boolean,
      default: false,
    },
    filterByTerm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      breedsInitial: 12,
      breedsToShow: 0,
      loadedMore: 1,
      finished: false,
    }
  },
  computed: {
    filterLetter() {
      if (!this.filterByLetter) return false
      return this.$store.state.filterLetter
    },
    filterTerm() {
      if (!this.filterByTerm) return false
      return this.$store.state.filterTerm
    },
    breeds() {
      const breeds = JSON.parse(JSON.stringify(this.$store.state.breeds)) // Needed for avoid mutating the original array
      if (this.filterTerm) {
        const filteredByTerm = breeds.filter((breed) =>
          breed.name
            .toLowerCase()
            .includes(this.filterTerm.split('|')[0].trim())
        )
        if (!this.filterTerm.includes('|')) return filteredByTerm // Filter only by breed
        return filteredByTerm
          .filter((breed) =>
            breed.sub.some((sub) =>
              sub.includes(this.filterTerm.split('|')[1].trim())
            )
          ) // Filter breeds to show only the ones with corresponding subbreeds
          .map((breed) =>
            Object.assign(breed, {
              sub: breed.sub.filter((sub) =>
                sub.toLowerCase().includes(this.filterTerm.split('|')[1].trim())
              ),
            })
          ) // Showing only corresponding subbreeds
      }
      if (this.filterLetter)
        return breeds.filter((breed) =>
          breed.name.startsWith(this.filterLetter)
        )
      return breeds
    },
  },
  watch: {
    breeds(value) {
      this.loadedMore = 1
      this.finished = false
      if (value.length <= this.breedsInitial) {
        this.breedsToShow = value.length
        this.finished = true
      } else {
        this.breedsToShow = this.breedsInitial
      }
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    if (this.breeds.length <= this.breedsInitial) {
      this.breedsToShow = this.breeds.length
      this.finished = true
    } else {
      this.breedsToShow = this.breedsInitial
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    loadMore() {
      if (
        this.breedsInitial * this.loadedMore <= this.breeds.length &&
        this.breeds.length - this.breedsInitial * this.loadedMore >=
          this.breedsInitial
      ) {
        this.breedsToShow += this.breedsInitial
      } else if (this.breedsInitial * this.loadedMore <= this.breeds.length) {
        this.breedsToShow +=
          this.breeds.length - this.breedsInitial * this.loadedMore
        this.finished = true
      }
      this.loadedMore++
    },
    handleScroll() {
      const windowEnd =
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight - 300
      if (windowEnd) this.loadMore()
    },
  },
}
</script>

<style lang="scss" scoped>
.breed {
  text-transform: capitalize;
}
</style>
