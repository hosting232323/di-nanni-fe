<template>
  <section class="contact-section">
    <div class="social-container">
      <v-row justify="center" class="social-buttons">
        <v-btn icon href="https://www.instagram.com/fapricambiauto/" target="_blank" aria-label="Instagram"
          class="social-btn">
          <v-icon size="44px" color="#E1306C">mdi-instagram</v-icon>
        </v-btn>

        <v-btn icon href="https://www.facebook.com/fapricambiauto?locale=it_IT" target="_blank" aria-label="Facebook"
          class="social-btn">
          <v-icon size="44px" color="#1877F2">mdi-facebook</v-icon>
        </v-btn>
      </v-row>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" :md="6">
          <div class="form-section">
            <h2 class="form-title">Scrivimi</h2>
            <v-form ref="form" v-model="isValid" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Il tuo nome</label>
                <v-text-field v-model="formData.nome" label="Nome" :rules="validation.requiredRules" required />
              </div>
              <div class="form-group">
                <label for="email">La tua email</label>
                <v-text-field v-model="formData.email" label="Email" :rules="validation.emailRules" required />
              </div>
              <div class="form-group">
                <label>Oggetto (facoltativo)</label>
                <div class="checkbox-group">
                  <label class="checkbox-label">
                    <input type="checkbox" v-model="formData.appointmentRequest">
                    Richiesta appuntamento
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" v-model="formData.questionRequest">
                    Vorrei farti una domanda...
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="message">Il tuo messaggio</label>
                <v-textarea v-model="formData.message" label="Messaggio" required rows="4" />
              </div>
              <v-btn type="submit" :disabled="!isValid" color="primary">INVIA</v-btn>
            </v-form>
          </div>
        </v-col>
        <v-col cols="12" :md="6">
          <div class="contact-info">
            <div class="contact-links">
              <a href="tel:+393242425380" class="contact-link">
                <v-icon class="contact-icon">mdi-phone</v-icon>
                Chiamami
              </a>
              <a href="https://wa.me/+393425644546" class="contact-link">
                <v-icon class="contact-icon">mdi-whatsapp</v-icon>
                Contattami su WhatsApp
              </a>
            </div>
            <div class="contact-details">
              <h3>Indirizzo</h3>
              <p>Via Corfù, 13</p>
              <p>70121 Bari</p>
              <h3>Orario studio</h3>
              <p>Dal lunedì al sabato solo su appuntamento</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import validation from '@/utils/validation.js';
import http from '@/utils/http.js';
import mobile from '@/utils/mobile.js';

const isMobile = mobile.setupMobileUtils();

const isValid = ref(false);
const form = ref(null);
const formData = reactive({
  nome: '',
  email: '',
  appointmentRequest: false,
  questionRequest: false,
  message: ''
});

const handleSubmit = () => {
  if (form.value.validate()) {
    const mailData = {
      email: import.meta.env.VITE_FORM_MAIL,
      subject: "Nuovo contatto dal form del sito",
      body: `Nome: ${formData.nome}\nEmail: ${formData.email}\n` +
        `Richiesta appuntamento: ${formData.appointmentRequest ? 'Sì' : 'No'}\n` +
        `Domanda: ${formData.questionRequest ? 'Sì' : 'No'}\n` +
        `Messaggio: ${formData.message}`
    };
    http.postRequest('send-mail', mailData, () => {
      alert("Mail inviata con successo! Ti ringraziamo per averci contattato.");
    }, 'POST');
  } else {
    alert("Per favore, compila correttamente tutti i campi.");
  }
};
</script>

<style scoped>
.social-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: -3rem;
}

.social-buttons {
  gap: 1.5rem;
}

.social-btn {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.social-btn:hover {
  transform: scale(1.1);
}

.form-title {
  color: #8B4513;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #8B4513;
  margin-bottom: 0.5rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #8B4513;
  text-decoration: none;
  font-size: 1.2rem;
}

.contact-icon {
  width: 24px;
  height: 24px;
}

.contact-details h3 {
  color: #8B4513;
  margin: 1.5rem 0 0.5rem;
}

.contact-details p {
  color: #666;
  margin: 0.25rem 0;
}
</style>
