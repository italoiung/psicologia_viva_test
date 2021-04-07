<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="headline"
          >Cachorros da raça <strong>{{ breed }}</strong></v-card-title
        >
        <v-card-subtitle class="headline"
          >E da sub-raça <strong>{{ subbreed }}</strong></v-card-subtitle
        >
        <v-card-text>
          <p>Veja aqui os cachorros da raça selecionada.</p>
          <p>
            Você pode favoritar as imagens para ver depois. Basta clicar no botão
            no rodapé da imagem.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <molecule-dogs :dogs="dogs" :breed="breed" />
  </v-row>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const breed = params.breed
    const subbreed = params.subbreed
    const dogs = await $axios.$get(
      `https://dog.ceo/api/breed/${breed}/${subbreed}/images`
    )
    return { dogs: dogs.message, breed, subbreed }
  },
}
</script>

<style lang="scss" scoped>
strong {
  text-transform: capitalize;
}
</style>
