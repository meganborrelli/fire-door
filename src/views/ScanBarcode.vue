<script setup lang="ts">
import {
     type Ref, ref, toRefs, watch, onMounted, inject, computed,
} from "vue";
  // @ts-ignore
import { QrcodeStream } from 'vue3-qrcode-reader'
  // @ts-ignore
const qrValue: Ref<string> = ref("Qr value - this will be a unique ID we will have to generate qith a sticker, scan a QR code it works currently")
function onDecode (event: string) {
  console.log('hi', event)
  qrValue.value = event;
}

</script>

<template>
    <div class="qr-scanner">
        <qrcode-stream @decode="onDecode($event)"></qrcode-stream>
    </div>
    {{ qrValue }}
</template>
  
  <style>
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
  