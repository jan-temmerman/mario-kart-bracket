<template>
  <input v-model="userName" type="text" placeholder="Enter your name">
  <p v-for="participant in participants">{{ participant }}</p>
</template>

<script setup lang="ts">
  import Client from "~/clients/client";
  import type {Ref} from "vue";
  import Participant from "~/models/Participant";
  import { createClient } from '@supabase/supabase-js'
  import {present} from "~/utils/typescript";

  const config = useRuntimeConfig()
  const supabaseUrl = 'https://rvpogsjojzncsdonvejp.supabase.co'
  const supabaseKey = present(config.supabaseKey)
  const supaBase = createClient(supabaseUrl, supabaseKey)

  const userName = ref('');
  const participants: Ref<Array<Participant>> = ref([]);

  onMounted(async () => {
    participants.value = await getParticipants();
  });

  async function getParticipants(): Promise<Array<Participant>> {
    const { data, error } = await supaBase
        .from('countries')
        .select()
    return data?.map(p => Participant.withData(p)) ?? [];
  }
</script>