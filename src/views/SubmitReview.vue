<script setup lang="ts">
import {
     type Ref, ref, toRefs, watch, onMounted, inject, computed,
} from "vue";

const previousSubmissions: Ref<any> = ref(null);

onMounted(() => {
  // @ts-ignore
    Formio.createForm(document.getElementById('formio'), 'https://kcmpmbkzfjbiagr.form.io/firesafetychecker');
});

async function getSubmission() {
    previousSubmissions.value = await fetch('https://kcmpmbkzfjbiagr.form.io/firesafetychecker/submission')
    .then(response => response.json())
    .then(actualData => {
        console.log(actualData, 'boo')
        return actualData
    })
}

</script>

<template>
    <div class="form-submission">
        <div id="formio"></div>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  