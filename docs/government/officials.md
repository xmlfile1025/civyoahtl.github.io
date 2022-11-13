---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/226898080547602432/887e8e6a60a0e05deac971f03ef26b11.webp',
    name: 'Saint Neo',
    title: 'Alcuahtl, General, Councillor',
    links: []
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168818172781264897/c01835926bb80b8e36315295cbf0e155.webp',
    name: "MechanicalRift",
    title: 'Cheiftain',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/199409362781863936/21d680e262f5c1765dbeab62e61bf618.webp',
    name: "Yergo",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/290905238557425666/f83daadfd59e52f95515d78a211dcaa9.webp',
    name: "Mahz",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168746386320261120/d4ec08b4baa5421ebb118a6f3d647fd4.webp',
    name: "Solitaire7",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/514276470764339212/faeb197354987776e12bca989b230e79.webp',
    name: "s p a c e v o l c a n o",
    title: 'High Justice',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Government Officials
    </template>
    <template #lead>
        Yoahtl is comprised of people from around the world, 
        and those listed below are among those who hold offical jobs within it.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
