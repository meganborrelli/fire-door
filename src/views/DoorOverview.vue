<script setup lang="ts">
import {
     type Ref, ref, toRefs, watch, onMounted, inject, computed,
} from "vue";

const previousSubmissions: Ref<any> = ref(null);

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
    <h3>Previous Submissions</h3>
    <button @click="getSubmission()"> hi </button>
    <div>
        <div v-if="previousSubmissions !== null">
            <div v-for="(x, i) in previousSubmissions" :key="i">
                {{ x }}
            </div>
        </div>
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
  