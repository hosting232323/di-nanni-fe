<template>
  <footer class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <h3 class="footer-title">Trattamenti</h3>
          <ul class="footer-list">
            <li><router-link to="/trattamenti/agopuntura">Agopuntura</router-link></li>
            <li><router-link to="/trattamenti/fitoterapia">Fitoterapia</router-link></li>
            <li><router-link to="/trattamenti/aromaterapia">Aromaterapia</router-link></li>
            <li><router-link to="/trattamenti/tecniche-complementari">Tecniche complementari</router-link></li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <h3 class="footer-title">Scopri chi sono</h3>
          <ul class="footer-list">
            <li><router-link to="/chi-sono/come-procedo">Come procedo</router-link></li>
            <li><router-link to="/chi-sono/la-mia-storia">La mia storia</router-link></li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <h3 class="footer-title">Contattami</h3>
        </v-col>
        <v-col cols="12" md="3">
          <h3 class="footer-title">Agenda</h3>
        </v-col>
      </v-row>
      <v-row justify="center" class="social-row">
        <v-btn icon href="https://www.instagram.com" target="_blank" class="social-btn">
          <v-icon size="30px" color="#E1306C">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon href="https://www.facebook.com" target="_blank" class="social-btn">
          <v-icon size="30px" color="#1877F2">mdi-facebook</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(to top, #7D2636, #a33a4d);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.footer-list {
  list-style: none;
  padding: 0;
}

.footer-list li {
  margin-bottom: 0.5rem;
}

.footer-list li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.footer-list li a:hover {
  text-decoration: underline;
}

.social-row {
  margin-top: 20px;
}

.social-btn {
  margin: 0 10px;
  transition: transform 0.2s ease-in-out;
}

.social-btn:hover {
  transform: scale(1.1);
}
</style>
