<template>
  <v-chip
    class=""
    size="small"
    label
    :color="color"
  >
    {{ textType }}
  </v-chip>
</template>
<script>

export default {
  props: {
    textType: String,
    color: String
  }
}
</script>
