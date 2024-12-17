<script setup lang="ts">
import {
     type Ref, ref, toRefs, watch, onMounted, inject, computed,
} from "vue";

const previousSubmissions: Ref<any> = ref(null);
const props = defineProps<{
  formid: string,
}>();

async function getSubmissionOnClick() {
    previousSubmissions.value = await fetch('https://kcmpmbkzfjbiagr.form.io/firesafetychecker/submission')
    .then(response => response.json())
    .then(actualData => {
        console.log(actualData, 'boo')
        return actualData.reverse()
    })
    console.log(previousSubmissions)
}
  // @ts-ignore
function showItem(item) {
    console.log(item)
}
</script>

<template>
    <div class="prev-submissions">
        <v-btn @click="getSubmissionOnClick()"> View Pre Selected Form </v-btn>
        <div>
            <div v-if="previousSubmissions !== null">
                <v-expansion-panels>
                    <v-expansion-panel 
                        v-for="(x, i) in previousSubmissions" 
                        @click="showItem($event)"
                        v-bind:key="i"
                        class="pb-3" 
                        value="header">
                        <v-expansion-panel-title hide-actions>
                            Report {{ i}}
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Inpection Date: {{ x.created }}<br>
                            Is firedoor safe: {{ x.data.isFireDoorSafe }}
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
  </template>
  
<style>
.prev-submissions {
    /* display: table-caption; */
    margin-top: 140px;
}
@media only screen and (max-width: 760px) {
    .prev-submissions {
      margin-top: 130px;
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
  