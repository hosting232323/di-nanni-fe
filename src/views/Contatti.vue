<template>
  <v-container class="padding-fix">
    <v-row>
      <v-col cols="12" md="5" class="text-content">
        <h1 class="text-h3 font-weight-bold" style="color: #7D2636;">Contattaci</h1>
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
import { useHead } from '@vueuse/head';
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

    http.postRequest('send-mail', mailData, () => {
      alert("Mail inviata con successo! Ti ringraziamo per averci contattato.");
    }, 'POST');
  } else {
    alert("Per favore, compila correttamente tutti i campi.");
  }
};

useHead({
  title: "Contatti - Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari",
  meta: [
    {
      name: "description",
      content:
        "Contatta Doriana Di Nanni per informazioni sui trattamenti olistici, come agopuntura e fitoterapia, a Bari. Puoi inviare un messaggio, richiedere un appuntamento o fare domande sul nostro servizio."
    },
    {
      name: "keywords",
      content:
        "contatti, agopuntura, fitoterapia, aromaterapia, tecniche olistiche, richieste, appuntamento, Bari, Puglia, medicina tradizionale cinese"
    },
    { name: "author", content: "Doriana Di Nanni" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { property: "og:title", content: "Contatti - Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari" },
    {
      property: "og:description",
      content:
        "Contatta Doriana Di Nanni a Bari per richieste di appuntamenti o domande sui trattamenti di agopuntura, fitoterapia e altre tecniche olistiche."
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://dorianadinanni.it/contatti" },
    { property: "og:image", content: "https://dorianadinanni.it/assets/logo.png" },
    { property: "og:locale", content: "it_IT" },
    { property: "og:site_name", content: "Doriana Di Nanni" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Contatti - Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari"
    },
    {
      name: "twitter:description",
      content:
        "Contatta Doriana Di Nanni per richiedere appuntamenti o fare domande su trattamenti olistici e complementari a Bari."
    },
    { name: "twitter:image", content: "https://dorianadinanni.it/assets/logo.png" },
    { name: "twitter:site", content: "@dorianadinanni" },
    { name: "geo.region", content: "IT-BA" },
    { name: "geo.placename", content: "Bari" },
    { name: "geo.position", content: "41.1184;16.8847" },
    { name: "ICBM", content: "41.1184, 16.8847" },
    { name: "business:contact_data:street_address", content: "Via Corfù, 13" },
    { name: "business:contact_data:locality", content: "Bari" },
    { name: "business:contact_data:region", content: "BA" },
    { name: "business:contact_data:postal_code", content: "70121" },
    { name: "business:contact_data:country_name", content: "Italy" },
    { name: "business:contact_data:email", content: "d.dinanni@gmail.com" },
    { name: "business:contact_data:phone_number", content: "+39 379 218 5146" },
    { name: "business:contact_data:website", content: "https://dorianadinanni.it" }
  ]
});
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
