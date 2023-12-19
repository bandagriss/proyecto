<template>
  <div class="w-screen h-screen bg-base-100">
    <NavBar class="h-[8%] border-b-[0.125rem] border-base-200"></NavBar>
    <div class="w-full h-[92%] flex overflow-y-auto">
      <div class="w-[17rem] flex-none border-r-[0.125rem] border-base-200">
        <SideBar>
          <div class="font-bold">Menu Principal</div>
          <MenuSideBar v-for="(menu, index) in menus" :data="menu" :key="index"> </MenuSideBar>
          <div class="divider"></div>
          <div class="mt-12 font-bold">Menu Secundario</div>
          <MenuSideBar v-for="(menu, index) in menus" :data="menu" :key="index"> </MenuSideBar>
        </SideBar>
      </div>
      <div class="w-full">
        <ContaintBase></ContaintBase>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/components/common/NavBar.vue'
import SideBar from '@/components/common/SideBar.vue'
import MenuSideBar from '@/components/common/MenuSideBar.vue'
import ContaintBase from '@/components/common/ContaintBase.vue'
import { themeChange } from 'theme-change'

const menus = [
  {
    icon: 'Home',
    url: '/inicio',
    name: 'Inicio'
  },
  {
    icon: 'GiftBox',
    url: '/productos',
    name: 'Productos'
  },
  {
    icon: 'Grid',
    url: '/campanias',
    name: 'Campaña'
  },
  {
    icon: 'Users',
    url: '/usuarios',
    name: 'Usuarios'
  },
  {
    icon: 'ChartLineUp',
    url: '/reportes',
    name: 'Reportes'
  },
  {
    icon: 'Cog',
    url: '/configuraciones',
    name: 'Configuración'
  }
]

onMounted(() => {
  themeChange(false)
})
</script>
