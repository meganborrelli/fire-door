<script setup lang="ts">
import {
     type Ref, ref, toRefs, watch, onMounted, inject, computed,
} from "vue";
  // @ts-ignore
import { QrcodeStream } from 'vue3-qrcode-reader'
  // @ts-ignore
const qrValue: Ref<string> = ref("Qr value - this will be a unique ID we will have to generate qith a sticker, scan a QR code it works currently")
const previousSubmissions: Ref<any> = ref(null);
const toggleQr: Ref<boolean> = ref(true);

function onDecode (event: string) {
  console.log('hi', event)
  qrValue.value = event;
  console.log(qrValue.value.split('id=')[1])
  getSubmissionOnClick(qrValue.value.split('id=')[1])
}

async function getSubmissionOnClick(qrId:string) {
    previousSubmissions.value = await fetch(`https://kcmpmbkzfjbiagr.form.io/${qrId}/submission`)
    .then(response => response.json())
    .then(actualData => {
        console.log(actualData, 'boo')
        toggleQr.value = false;
        return actualData.reverse()
    })
}

function scanNewQr() {
    toggleQr.value = true;
    previousSubmissions.value = null;
}
function showItem(item: any) {
    console.log(item)
}
</script>

<template>
    <div v-if="toggleQr" class="qr-scanner">
        <qrcode-stream @decode="onDecode($event)"></qrcode-stream>
    </div>
    {{ qrValue }}
    <v-btn v-if="!toggleQr" @click="scanNewQr()">Scan new QR</v-btn>
    <div v-if="previousSubmissions !== null && !toggleQr">
        <v-expansion-panels class="pt-5">
            <v-expansion-panel 
                v-for="(x, i) in previousSubmissions" 
                @click="showItem($event)"
                v-bind:key="i"
                class="pb-3" 
                value="header">
                <v-expansion-panel-title hide-actions>
                    Report {{ i + 1}}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    Inpection Date: {{ x.created }}<br>
                    Is following checks meet safety criteria: <br>
                    Glass inspection: {{ x.data.confirmAllAreSafe.glass }}<br>
                    Hinges inspection: {{ x.data.confirmAllAreSafe.glass }}<br>
                    Overall inspection: {{ x.data.confirmAllAreSafe.glass }}<br>
                    Additional Notes: {{ x.data.notes }}
                </v-expansion-panel-text>
            </v-expansion-panel>
                </v-expansion-panels>
    </div>
</template>
  
  <style>
.v-btn {
    margin-top: 170px;
}
  @media only screen and (max-width: 760px) {
    .qr-scanner {
      margin-top: 130px;
    }
  }
  @media only screen and (max-width: 760px) {
    .form-submission.container {
      padding-top: 120px;
    }
  }
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  