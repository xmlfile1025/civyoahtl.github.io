---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/226898080547602432/887e8e6a60a0e05deac971f03ef26b11.webp',
    name: 'Saint Neo',
    title: 'Alcuahtl, General',
    links: []
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168818172781264897/c01835926bb80b8e36315295cbf0e155.webp',
    name: "MechanicalRift",
    title: 'Cheiftain, Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/518133521517248530/b37e7ea1394e5e78d159f0c984d358b4.webp',
    name: "KingOfTheMochas",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168410986032660480/e7caf01b23fa2e4a5ea83377e2a8c8b8.webp',
    name: "Klari Stone",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168746386320261120/d4ec08b4baa5421ebb118a6f3d647fd4.webp',
    name: "Solitaire7",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/314198862560493569/aeadded1e4be9857a5aa0db265d00056.webp',
    name: "Feathery Stone",
    title: 'Councillor, Auditor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/175739715243343873/15b26c2db14c31de96891a1d77eba764.webp',
    name: "Scouter9001",
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
