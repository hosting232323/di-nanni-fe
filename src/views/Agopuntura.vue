<template>
    <v-container class="pa-0">
        <v-row class="text-center">
            <v-col>
                <h1 class="title">AGOPUNTURA</h1>
            </v-col>
        </v-row>
  
        <v-card class="pa-5" elevation="0">
            <v-row>
                <v-col cols="12" md="4" class="d-flex align-center">
                    <div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: center;">
                        <video autoplay loop muted src="@/assets/agopuntura.mp4" style="max-width: 100%; max-height: 100%; object-fit: contain;"></video>
                    </div>
                </v-col>
                <v-col cols="12" md="8">
                    <h2 class="subtitle">Cos'è l'Agopuntura?</h2>
                    <p class="description">
                        L'<strong>agopuntura</strong> è una pratica terapeutica millenaria che affonda le sue radici nella medicina tradizionale cinese.
                        Si fonda sull'idea che la salute dipenda dall'equilibrio delle forze vitali, o Qi, che scorrono attraverso i meridiani energetici del corpo. 
                        Questi canali formano una rete complessa lungo la quale scorre l'energia vitale, e quando il flusso di Qi viene interrotto o bloccato, si manifesta il dolore.
                    </p>
                    <p class="description">
                        All'interno di questi meridiani si trovano punti specifici, noti come agopunti, che possono essere stimolati per ripristinare l'equilibrio energetico. 
                        La stimolazione avviene principalmente tramite l'inserimento di aghi sottilissimi nella pelle, ma può anche essere effettuata con tecniche di digitopressione.
                    </p>
                    <p class="description">
                        Questa terapia favorisce il rilascio di sostanze benefiche come endorfine, dinorfine e neurotrasmettitori, agendo direttamente sul sistema nervoso centrale. 
                        Inoltre, induce il rilassamento muscolare e attiva meccanismi antinfiammatori sia a livello locale che sistemico.
                    </p>
                </v-col>
            </v-row>
        </v-card>

        <v-row class="justify-center mt-6">
            <v-col cols="12">
                <v-card class="contra-card pa-4 mx-auto" elevation="4" @click="showDescription = !showDescription">
                    <div class="d-flex align-center">
                        <v-icon class="arrow-icon" :class="{'rotate': showDescription}">mdi-chevron-right</v-icon>
                        <h3 class="contra-title ml-2">L'agopuntura ha controindicazioni?</h3>
                    </div>
                    <v-expand-transition>
                        <div v-if="showDescription" class="expanded-text">
                            <p class="contra-text">
                            L'<strong>agopuntura</strong> è un trattamento sicuro e ha pochissimi effetti collaterali, 
                            <em>(dolore e lividi e/o sanguinamenti sulle parti in cui entrano i piccoli aghi)</em>.
                            </p>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="justify-center mt-6">
            <v-col cols="12">
                <v-card class="contra-card pa-4 mx-auto" elevation="4" @click="showDescription2 = !showDescription2">
                    <div class="d-flex align-center">
                        <v-icon class="arrow-icon" :class="{'rotate': showDescription2}">mdi-chevron-right</v-icon>
                        <h3 class="contra-title ml-2">L’agopuntura è riconosciuta?</h3>
                    </div>
                    <v-expand-transition>
                        <div v-if="showDescription2" class="expanded-text">
                            <p class="contra-text">
                                Ad oggi è riconosciuta e validata dai sistemi sanitari nazionali e dall’Organizzazione Mondiale della Sanità; negli ultimi anni, anche la ricerca ha pubblicato migliaia di studi scientifici che provano l’efficacia di questa terapia. 
                                <br>In Italia questo sistema terapeutico è stato inserito nei LEA <em>(livelli essenziali di assistenza)</em>: perciò in alcune regioni italiane è possibile effettuare queste prestazioni tramite il Servizio Sanitario Nazionale.
                            </p>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="justify-center mt-6">
            <v-col cols="12">
                <v-card class="contra-card pa-4 mx-auto" elevation="4" @click="showDescription3 = !showDescription3">
                    <div class="d-flex align-center">
                        <v-icon class="arrow-icon" :class="{'rotate': showDescription3}">mdi-chevron-right</v-icon>
                        <h3 class="contra-title ml-2">Gli aghi sono usa e getta? Sono molto grandi?</h3>
                    </div>
                    <v-expand-transition>
                        <div v-if="showDescription3" class="expanded-text">
                            <p class="contra-text">
                                Gli aghi sono usa e getta, sono molto sottili e flessibili. Il loro inserimento potrebbe provocare un leggero “effetto pizzicotto”, un formicolio, un minimo senso di calore ma non sono dolorosi <em>(non devono esserlo per l’intera durata della seduta)</em> e soprattutto sono effetti del tutto personali.
                            </p>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>
  
<script setup>
import { ref } from 'vue';

const showDescription = ref(false);
const showDescription2 = ref(false);
const showDescription3 = ref(false);
</script>
  
<style scoped>

.title {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    background-color: #7d2b3b;
    padding: 15px;
}
  

.subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    color: #7d2b3b;
}
  
.description {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
}
  
.contra-card {
    background: linear-gradient(to bottom, #7d2b3b, #b47c88);
    color: white;
    border-radius: 15px;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 95%;
    max-width: 1200px;
}

.expanded-text {
  margin-left: 32px;
  margin-top: 3px;
  text-align: left;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.rotate {
  transform: rotate(90deg);
}

</style>