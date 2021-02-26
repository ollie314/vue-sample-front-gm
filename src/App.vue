<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button
              class="md-icon-button"
              @click="menuVisible = !menuVisible"
            >
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">{{ title }}</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>
        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <RoutableTab v-bind:tabs="tab" />
          </md-tabs>
        </div>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="3"
          >Navigation</md-toolbar
        >

        <md-list>
          <md-list-item
            v-for="menu in sideMenu.menus"
            v-bind:key="menu.id"
            v-bind:to="menu.uri"
          >
            <md-icon>{{ menu.icon }}</md-icon>
            <span class="md-list-item-text">{{ menu.label }}</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import RoutableTab from "@/components/RoutableTab";
import menus from "@/datas/menus.json";
import tabs from "@/datas/tabs.json";

export default {
  name: "App",
  components: {
    RoutableTab,
  },
  data: () => ({
    menuVisible: false,
    title: "SagaCT",
    activeTab: "home",
    sideMenu: {
      menus,
    },
    tabs,
  }),
  computed: {
    tab: function () {
      return this.tabs[this.activeTab];
    },
  },
  watch: {
    $route(to, from) {
      const p = to.path.split("/");
      const t = p[1];
      this.activeTab = t === "" ? "home" : t;
    },
  },
};
</script>

<style lang="scss" scoped>
.md-app {
  min-height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

