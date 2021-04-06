<template>
  <v-col cols="12" sm="8" md="6">
    <template v-for="index in dogsToShow">
      <v-card :key="formattedDogs[index - 1].src" class="dog">
        <img :src="formattedDogs[index - 1].src" :alt="`${breed}-${index}`" />
        <v-card-actions>
          <v-spacer />
          <v-btn
            class="ma-2"
            text
            icon
            color="red"
            @click="() => like(formattedDogs[index - 1].src)"
          >
            <v-icon v-if="formattedDogs[index - 1].isLiked"
              >mdi-heart-remove-outline</v-icon
            >
            <v-icon v-else>mdi-heart-plus</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <hr :key="formattedDogs[index - 1].src + ' divisor'" class="my-2" />
    </template>
    <v-btn v-if="!finished" color="primary" @click="loadMore"
      >Carregar mais</v-btn
    >
  </v-col>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    dogs: {
      type: Array,
      default: () => [],
    },
    breed: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      dogsInitial: 6,
      dogsToShow: 0,
      loadedMore: 1,
      finished: false,
    }
  },
  computed: {
    selectedDogs() {
      return this.$store.state.dogs
    },
    formattedDogs() {
      return this.dogs.map((dog) => ({
        src: dog,
        isLiked: this.selectedDogs.includes(dog),
      }))
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    if (this.dogs.length <= this.dogsInitial) {
      this.dogsToShow = this.dogs.length
      this.finished = true
    } else {
      this.dogsToShow = this.dogsInitial
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapMutations({
      like: 'UPDATE_DOGS',
    }),
    loadMore() {
      if (
        this.dogsInitial * this.loadedMore <= this.dogs.length &&
        this.dogs.length - this.dogsInitial * this.loadedMore >=
          this.dogsInitial
      ) {
        this.dogsToShow += this.dogsInitial
      } else if (this.dogsInitial * this.loadedMore <= this.dogs.length) {
        this.dogsToShow += this.dogs.length - this.dogsInitial * this.loadedMore
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
.dog {
  > img {
    width: 100%;
    height: auto;
  }
}
</style>
