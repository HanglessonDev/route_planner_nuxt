<script setup lang="ts">
import { NuxtPwaManifest } from '#components';
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <VitePwaManifest /> -->
    <NuxtPwaManifest />
    <NuxtWelcome />
  </div>
</template>
