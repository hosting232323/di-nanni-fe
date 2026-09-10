<template>
  <v-container class="padding-fix">
    <v-row>
      <v-col cols="12" md="5" class="text-content">
        <h1 class="text-h3 font-weight-bold section-title" style="color: #7D2636;">Contattami</h1>
        <p class="section-subtitle">
          Compila il modulo per richiedere un appuntamento o farci una domanda. Ti risponderemo il prima possibile!
        </p>

        <div class="contact-links mt-6 mb-6">
          <a href="tel:+393792185146" class="contact-link">
            <v-icon class="contact-icon">mdi-phone</v-icon> +39 379 218 5146
          </a>
          <a href="https://wa.me/+393792185146" class="contact-link">
            <v-icon class="contact-icon">mdi-whatsapp</v-icon> Chatta su WhatsApp
          </a>
        </div>

        <div class="social-buttons">
          <v-btn icon href="https://www.instagram.com/dott.ssa_dorianadinanni" target="_blank" class="social-btn">
            <v-icon size="28" color="#E1306C">mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon href="https://www.facebook.com/inphytoveritas" target="_blank" class="social-btn">
            <v-icon size="28" color="#1877F2">mdi-facebook</v-icon>
          </v-btn>
        </div>
        <Map :class="['mt-6', isMobile ? 'mb-6' : '']" />
      </v-col>

      <v-col cols="12" md="7">
        <v-form ref="form" v-model="isValid" @submit.prevent="handleSubmit">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="formData.nome"
                label="Il tuo nome"
                :rules="validation.nameRules"
                required
                class="custom-input"
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="formData.email"
                label="La tua email"
                :rules="validation.emailRules"
                required
                class="custom-input"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="formData.oggetto"
                label="Oggetto (facoltativo)"
                class="custom-input"
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="formData.message"
                label="Il tuo messaggio"
                :rules="validation.requiredRules"
                required
                rows="4"
                class="custom-input"
              />
            </v-col>

            <v-col cols="12">
              <v-checkbox
                v-model="formData.appointmentRequest"
                label="Richiedo un appuntamento"
                class="custom-checkbox"
              />
              <v-checkbox
                v-model="formData.questionRequest"
                label="Ho una domanda da fare"
                class="custom-checkbox"
              />
            </v-col>

            <v-col cols="12">
              <v-btn type="submit" :disabled="!isValid" class="submit-btn">
                INVIA MESSAGGIO
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useHead } from '@unhead/vue';
import { seoFor } from '@/utils/seo.routes';
import { ref, reactive } from 'vue';
import http from '@/utils/http.js';
import validation from '@/utils/validation.js';
import Map from '@/components/Map';
import mobile from "@/utils/mobile";

const isMobile = mobile.setupMobileUtils();

const isValid = ref(false);
const form = ref(null);

const formData = reactive({
  nome: '',
  email: '',
  oggetto: '',
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
        `Oggetto: ${formData.oggetto || 'Nessuno'}\n` +
        `Richiesta appuntamento: ${formData.appointmentRequest ? 'Sì' : 'No'}\n` +
        `Domanda: ${formData.questionRequest ? 'Sì' : 'No'}\n` +
        `Messaggio: ${formData.message}`
    };

    http.makeRequest('send-mail', 'POST', { body: { mailData } }, () => {
      alert("Mail inviata con successo! Ti ringraziamo per averci contattato.");
    });
  } else {
    alert("Per favore, compila correttamente tutti i campi.");
  }
};

useHead(seoFor('/contatti'));
</script>

<style scoped>
.logo-and-social {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  max-width: 160px;
}

.social-buttons {
  display: flex;
  gap: 12px;
}

.social-btn:hover {
  transform: scale(1.1);
}

.section-subtitle {
  margin-top: 10px;
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
}

.custom-input {
  border-radius: 12px;
}

.custom-checkbox {
  color: #7D2636;
}

.submit-btn {
  background-color: #7D2636;
  color: white;
  font-weight: bold;
  width: 100%;
  border-radius: 25px;
  padding: 12px;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #5a1b29;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  color: #7D2636;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-icon {
  font-size: 20px;
}
</style>
