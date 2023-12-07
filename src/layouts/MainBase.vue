<template>
  <div class="w-screen h-screen">
    <NavBar class="bg-white h-[8%]"></NavBar>
    <div class="bg-[#f2f5fc] w-full h-[92%] flex overflow-y-auto">
      <div class="w-[17rem] flex-none border-r-[0.125rem] border-slate-200">
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
import NavBar from '@/components/common/NavBar.vue'
import SideBar from '@/components/common/SideBar.vue'
import MenuSideBar from '@/components/common/MenuSideBar.vue'
import ContaintBase from '@/components/common/ContaintBase.vue'

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
</script>
