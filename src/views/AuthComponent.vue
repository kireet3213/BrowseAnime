<template>
  <v-container grid-list-md text-xs-center>
    <v-row align-content="center" justify="center">
      <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent>
              <v-text-field
                v-model="firstName"
                label="First name"
                :rules="firstNameRules"
              ></v-text-field>

              <v-text-field
                v-model="lastName"
                label="Last name"
                :rules="lastNameRules"
              ></v-text-field>

              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-sheet>
    </v-row>
  </v-container>

</template>
<script setup lang="ts">
import { ref } from "vue";
const firstName = ref("");
const lastName = ref("");
const firstNameRules = [
  (value: any) => {
    if (value?.length > 3) return true;

    return "First name must be at least 3 characters.";
  },
];
const lastNameRules = [
  (value:any) => {
    if (/[^0-9]/.test(value)) return true;

    return "Last name can not contain digits.";
  },
];
</script>
<style></style>
