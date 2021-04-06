<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="headline"
          >Cachorros marcados como favoritos</v-card-title
        >
        <v-card-text>
          <p>Veja aqui os cachorros que mais te chamaram atenção.</p>
          <p>
            Você pode desmarcar as imagens para que saiam dessa listagem. Bata
            clicar no botão no rodapé da imagem.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <molecule-dogs :dogs="dogs" />
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dogs: this.$store.state.dogs,
    }
  },
}
</script>

<style lang="scss" scoped>
strong {
  text-transform: capitalize;
}
</style>
