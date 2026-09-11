<template>
  <footer class="footer">
    <v-row>
      <v-col cols="12" lg="5" md="4" class="d-flex flex-column justify-center align-center">
        <div class="d-flex justify-center">
          <a href="https://www.instagram.com/dott.ssa_dorianadinanni" target="_blank"><span class="mdi mdi-instagram social"></span></a>
          <a href="https://www.facebook.com/inphytoveritas" target="_blank"><span class="mdi mdi-facebook social"></span></a>
        </div>
        <div class="footer-links">
          <router-link class="other-title" to="/contatti">Contattami</router-link>
          <router-link class="other-title" to="/chi-sono">Scopri chi sono</router-link>
          <router-link class="other-title" to="/blog">Blog</router-link>
        </div>
      </v-col>
      <v-col cols="12" lg="7" md="8">
        <h3 class="footer-title">Trattamenti</h3>
          <div class="d-flex justify-space-around">
            <ul class="footer-list">
              <li><router-link to="/trattamenti/agopuntura">Agopuntura</router-link></li>
              <li v-if="!isMobile"><router-link to="/trattamenti/fitoterapia-aromaterapia">Fitoterapia e Aromaterapia</router-link></li>
              <li v-else><router-link to="/trattamenti/fitoterapia-aromaterapia">Fitoterapia e<br> Aromaterapia</router-link></li>
              <li><router-link to="/trattamenti/taopatch">Taopatch</router-link></li>
            </ul>
            <ul class="footer-list">
              <li><router-link to="/trattamenti/sobada-rebozo">Sobada e Rebozo</router-link></li>
              <li v-if="!isMobile"><router-link to="/trattamenti/tecniche-complementari">Tecniche complementari</router-link></li>
              <li v-else><router-link to="/trattamenti/tecniche-complementari">Tecniche<br>complementari</router-link></li>
            </ul>
          </div>
      </v-col>
    </v-row>
    <p>Powered By <a href="https://fastsite.it" target="_blank" class="powered">FastSite</a></p>


  </footer>
</template>

<script setup>
import mobile from '@/utils/mobile';

const isMobile = mobile.setupMobileUtils();
</script>

<style scoped>
.footer {
  background: linear-gradient(to top, #5a1b29, #7d2636 55%, #a33a4d);
  color: white;
  padding: 48px 20px 28px;
  text-align: center;
  border-top: 3px solid rgba(248, 212, 217, 0.55);
}

.social {
  font-size: 35px;
  margin: 0 10px;
  color: white;
  display: inline-block;
  transition: transform 0.25s ease, color 0.25s ease;
}

.social:hover {
  transform: scale(1.18) translateY(-2px);
  color: #f8d4d9;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.footer-list {
  padding: 0;
  text-align: left;
}


.other-title {
 font-size: 18px;
 transition: color 0.25s ease;
}
.footer-title a, .other-title, .powered {
  text-decoration: none;
  color: white;
}

.footer-title a:hover , .other-title:hover, .powered:hover {
  text-decoration: underline;
  color: #f8d4d9;
}

.double-footer {
  display: flex;
}



.footer-list li {
  margin-bottom: 0.5rem;
}

.footer-list li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.25s ease;
}

.footer-list li a:hover {
  text-decoration: underline;
  color: #f8d4d9;
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

.powered {
  opacity: 0.8;
  font-size: 0.9rem;
}
</style>
