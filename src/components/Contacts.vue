<template>
  <section class="contact-section">
    <v-container>

      <v-row align="center" class="mb-6">
        <v-col cols="6" class="text-left">
          <img src="@/assets/logo.png" alt="Logo" class="logo">
        </v-col>
        <v-col cols="6" class="text-right">
          <div class="social-buttons">
            <v-btn icon href="https://www.instagram.com" target="_blank" class="social-btn">
              <v-icon size="30px" color="#E1306C">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon href="https://www.facebook.com" target="_blank" class="social-btn">
              <v-icon size="30px" color="#1877F2">mdi-facebook</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-form ref="form" v-model="isValid" @submit.prevent="handleSubmit">
            <v-text-field 
              v-model="formData.nome" 
              label="Il tuo nome" 
              :rules="validation.nameRules" 
              required 
              class="custom-input"
            />
            <v-text-field 
              v-model="formData.email" 
              label="La tua email" 
              :rules="validation.emailRules" 
              required 
              class="custom-input"
            />
            <v-text-field 
              v-model="formData.oggetto" 
              label="Oggetto (facoltativo)" 
              class="custom-input"
            />
            
            <v-checkbox 
              v-model="formData.appointmentRequest" 
              label="Richiesta appuntamento" 
              class="custom-checkbox"
            />
            <v-checkbox 
              v-model="formData.questionRequest" 
              label="Vorrei farti una domanda..." 
              class="custom-checkbox"
            />
          </v-form>
        </v-col>

        <v-col cols="12" md="6">
          <v-textarea 
            v-model="formData.message" 
            label="Il tuo messaggio" 
            :rules="validation.requiredRules" 
            required 
            rows="4" 
            class="custom-input mb-4"
          />
          
          <v-btn type="submit" :disabled="!isValid" class="submit-btn mb-6">INVIA</v-btn>

          <div class="contact-links">
            <a href="tel:+393242425380" class="contact-link">
              <v-icon class="contact-icon">mdi-phone</v-icon> Chiamami
            </a>
            <a href="https://wa.me/+393425644546" class="contact-link">
              <v-icon class="contact-icon">mdi-whatsapp</v-icon> Scrivimi su Whatsapp
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import http from '@/utils/http.js';
import validation from '@/utils/validation.js';

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

    http.postRequest('send-mail', mailData, () => {
      alert("Mail inviata con successo! Ti ringraziamo per averci contattato.");
    }, 'POST');
  } else {
    alert("Per favore, compila correttamente tutti i campi.");
  }
};
</script>

<style scoped>
.contact-section {
  padding: 40px 20px;
  border-radius: 10px;
}

.logo {
  max-width: 200px;
  margin-bottom: 15px;
}

.social-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-bottom: 20px;
}

.social-btn {
  transition: transform 0.2s ease-in-out;
}

.social-btn:hover {
  transform: scale(1.1);
}

.form-title {
  color: #7D2636;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
}

.custom-input {
  background: white;
  border-radius: 20px;
  padding: 10px;
}

.custom-checkbox {
  color: #7D2636;
}

.submit-btn {
  background-color: #7D2636;
  color: white;
  font-weight: bold;
  width: 100%;
  border-radius: 20px;
  padding: 10px;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #5a1b29;
}

.contact-info {
  text-align: center;
  margin-top: 50px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7D2636;
  text-decoration: none;
  font-size: 1.2rem;
}

.contact-icon {
  font-size: 24px;
}
</style>