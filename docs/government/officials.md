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
    avatar: 'https://cdn.discordapp.com/avatars/834536107878121542/d3e84cb849dc40c34504d9038ca74d40?size=1024',
    name: 'Arconis',
    title: 'Alcuahtl, Councillor',
    links: []
  },
  {
    avatar: "https://cdn.discordapp.com/avatars/280697770942136320/3a93e8d2c10469b5ac6d958f9e914e9d?size=1024",
    name: "JessieJinx",
    title: 'Councillor',
  },
  {
    avatar: "https://cdn.discordapp.com/avatars/565974620243755010/a9a4c48978afebf6a59750b44ab94003?size=1024",
    name: "Matt4fun9",
    title: "Councillor"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/547001895458177044/c68145cb724bce64de4e335a3e10f7ba?size=1024',
    name: "VilyanZ",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/270360642496626690/b9ceea18f88c471b449b6945f821863e?size=1024',
    name: "x1025",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/208052614347227138/4c34d8d9ace0a234d682983f28f0a768?size=1024',
    name: "ArkenX",
    title: 'General',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168818172781264897/a3cdc309389db167bd69c05778c790dd?size=1024',
    name: "MechanicalRift",
    title: 'Cheiftain',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/280815367662731266/bbfd384a75256e5cb22c4f4c294a0960?size=1024',
    name: "Husky",
    title: 'High Justice',
  },
]

const day = new Date();
if (day.getMonth()+1 === 4 && day.getDate() === 1) {
    members.forEach((member) => {
    member.title = member.title.replace("Alcuahtl", "Axolotl");
  })
}
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
