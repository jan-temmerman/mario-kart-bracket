<template>
  <input v-model="userName" type="text" placeholder="Enter your name">
  <p v-for="participant in participants">{{ participant }}</p>
</template>

<script setup lang="ts">
  import type {Ref} from "vue";
  import Participant from "~/models/Participant";

  const userName = ref('');
  const participants: Ref<Array<Participant>> = ref([]);

  onMounted(async () => {
    const client = useSupabaseClient();
    const { data: participants } = await useAsyncData('participants',async () => {
      const { data } = await client.from('participants').select()
      participants.value = data;
    });
  });
</script>