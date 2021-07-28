<template>
  <BaseButton class="fs-1" @click.native="testPreset">Test preset</BaseButton>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      blacklist: [
        'yaoi',
        'gay',
        'futanari',
        '1futa',
        '2futas',
        '3futas',
        'male/male',
        'solo_male',
        'male_only',
        'trap',
        'femboy',
        'overweight',
        'fat',
        'bbw',
        'pavel',
        'doodledoggy',
        'nike_neko',
        'ventrexian',
        'mephitid',
        'anthro',
        'giant_boobs',
        'giant_ass',
        'gigantic_ass',
        'gigantic_nipples',
        'gigantic_breasts',
        'dendrophilia',
        'heavy_bondage',
        'edithemad',
        'scat',
        'shit',
        'shitting',
      ],
    }
  },
  methods: {
    ...mapActions({
      changeBannedTags: 'modules/search/changeBannedTags',
    }),
    testPreset() {
      this.blacklist.forEach((tag) => this.changeBannedTags(tag))
      //  TODO: читать из файла
    },
  },
}
</script>

<style></style>
