<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="headline"> Listagem de raças </v-card-title>
        <v-card-text>
          <p>
            Navegue pela listagem de todas as raças e use a paginação por letras
            do alfabeto para entrar a desejada.
          </p>
          <p>As raças serão carregadas conforme você rola a listagem.</p>
        </v-card-text>
      </v-card>
    </v-col>
    <organism-paginated-list />
  </v-row>
</template>
