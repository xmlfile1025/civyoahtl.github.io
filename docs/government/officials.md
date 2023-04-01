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
    avatar: 'https://cdn.discordapp.com/avatars/226898080547602432/887e8e6a60a0e05deac971f03ef26b11?size=1024',
    name: 'Saint Neo',
    title: 'Alcuahtl, General',
    links: []
  },
  {
    avatar: "https://cdn.discordapp.com/avatars/263128509784915968/94569db4000e0acdc01605ec2ef0531e?size=1024",
    name: "Flora_Borealis",
    title: 'Councillor',
  },
  {
    avatar: "https://cdn.discordapp.com/avatars/208052614347227138/4c34d8d9ace0a234d682983f28f0a768?size=1024",
    name: "ArkenX",
    title: "Councillor"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168818172781264897/c01835926bb80b8e36315295cbf0e155?size=1024',
    name: "MechanicalRift",
    title: 'Cheiftain',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/171377875897810944/c07f44651b9d5b8538da400419041139?size=1024',
    name: "Mokotowskie",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/280815367662731266/4f1550f0dd8d3ea899ee40cfd108fcb5?size=1024',
    name: "Husky",
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
