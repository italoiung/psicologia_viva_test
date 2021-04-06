<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="headline">
          Teste para a vaga de desenvolvedor front-end pleno
        </v-card-title>
        <v-card-text>
          <p>
            Me chamo Ítalo e vocês podem ver mais do meu trabalho no meu
            <a
              href="https://italo.viung.me"
              target="_blank"
              rel="noopener noreferrer"
              >portifólio</a
            >.
          </p>
          <p>
            Você também pode entrar em contato via e-mail através do endereço
            <a href="mailto:italo@viung.me">italo@viung.me</a> ou pelo meu
            <a
              href="https://www.linkedin.com/in/italo-vianna-iung/"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >.
          </p>
          <p>
            Nesse teste estaremos consumindo a Dog API. Abaixo temos os links de
            navegação para as funcionalidades requisitadas.
          </p>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/lista">Listagem de raças</v-btn>
          <v-btn color="secondary" nuxt to="/busca">Busca por nome</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
