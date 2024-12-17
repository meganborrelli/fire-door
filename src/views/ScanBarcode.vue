<script setup lang="ts">
import {
     type Ref, ref, toRefs, watch, onMounted, inject, computed,
} from "vue";
  // @ts-ignore
import { QrcodeStream } from 'vue3-qrcode-reader'
  // @ts-ignore
function onDecode (event) {
  console.log('hi', event)
}

</script>

<template>
    <div class="hi">
        <qrcode-stream @decode="onDecode($event)"></qrcode-stream>
    </div>
</template>
  
  <style>
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
  