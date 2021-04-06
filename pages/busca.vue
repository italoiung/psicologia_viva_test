<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="headline">Busca por raça</v-card-title>
        <v-card-text>
          <p>
            Digite o termo desejado e serão mostradas as raças que correspondem
            ao termo, assim como subraças dessas serão sugeridas para melhor
            experiência.
          </p>
          <p>
            Para buscar por raça e sub-raça, você deve usar o formato
            <code>Nome da raça | Nome da sub-raça</code> como em
            <code>Australian | Shepherd</code>.<br />Você não precisa digitar o
            termo completo de nenhum dos dois itens. Se você digitar
            <code>Aus | Shep</code>, a busca funcionará igual.
          </p>
          <p>
            Aqui os termos também são carregados conforme rolagem da página.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <organism-search-list />
  </v-row>
</template>

<style lang="scss" scoped>
code {
  white-space: nowrap;
}
</style>
