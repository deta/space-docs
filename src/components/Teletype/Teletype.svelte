<script lang="ts">
  import { Action, Teletype, TeletypeProvider, TeletypeSystem } from "@deta/teletype/src/index";
  import { getSystemTheme, changeTheme } from "../Header/ThemeToggle.svelte";
  import ColorSwatch from "@/components/Teletype/Icons/ColorSwatch.svelte";
  import Sun from "@/components/Teletype/Icons/Sun.svelte";
  import Moon from "@/components/Teletype/Icons/Moon.svelte";
  import Desktop from "@/components/Teletype/Icons/Desktop.svelte";
  import Support from "@/components/Teletype/Icons/Support.svelte";
  import Discord from "./Icons/Discord.svelte";
  import Logout from "./Icons/Logout.svelte";
  import Login from "./Icons/Login.svelte";
  import ArrowRight from "./Icons/ArrowRight.svelte";
  import { getMetadata } from "@/utils/metadata";
  import { onMount } from "svelte";
  import { useSearchAction } from "./search";

  const searchAction = useSearchAction();
  let actions: Action[] = [];

  let initialized = false;
  let isDevMode = false;
  let isAuthenticated = false;

  onMount(async () => {
    const data = await getMetadata();

    isDevMode = data.isDevMode;
    isAuthenticated = data.isAuthenticated;

    createActions();
    initialized = true;
  });

  /**
   * Generate teletype actions
   */
  function createActions() {
    // Reset actions
    actions = [];

    const isMigration = window.location.pathname.startsWith("/migration")
    const isManual = window.location.pathname.startsWith("/manual")
    const isDocs = window.location.pathname.startsWith("/docs")
    const isChangelog = window.location.pathname.startsWith("/changelog")

    // Go to Manual
    if (!isManual) {
      actions.push({
        id: "manual",
        name: "Go to Manual",
        icon: ArrowRight,
        section: "Navigate",
        actionText: "Navigate",
        handler() {
          window.location.href = "/manual";
        },
      });
    }

    // Go to Dosc
    if (!isDocs && isDevMode) {
      actions.push({
        id: "docs",
        name: "Go to Docs",
        icon: ArrowRight,
        section: "Navigate",
        actionText: "Navigate",
        handler() {
          window.location.href = "/docs";
        },
      });
    }

    // if (!isMigration && isDevMode) {
    //   actions.push({
    //     id: "migration",
    //     name: "Go to Migration Hub",
    //     icon: ArrowRight,
    //     section: "Navigate",
    //     actionText: "Navigate",
    //     handler() {
    //       window.location.href = "/migration";
    //     },
    //   });
    // }

    // Go to Changelog
    if (!isChangelog) {
      actions.push({
        id: "changelog",
        name: "Go to Changelog",
        icon: ArrowRight,
        section: "Navigate",
        actionText: "Navigate",
        handler() {
          window.location.href = "/changelog";
        },
      });
    }

    // Go to Canvas
    if (isAuthenticated) {
      actions.push({
        id: "canvas",
        name: "Go to Canvas",
        icon: ArrowRight,
        section: "Navigate",
        actionText: "Navigate",
        handler() {
          window.location.href = "/";
        },
      });
    }

    // Go to Discovery
    actions.push({
      id: "discovery",
      name: "Go to Discovery",
      icon: ArrowRight,
      section: "Navigate",
      actionText: "Navigate",
      handler() {
        window.open("/discovery", "_blank");
      },
    });

    // Search in Docs
    if (isDevMode || isDocs) actions.push(searchAction);

    // Help section
    actions.push(
      {
        id: "support",
        name: "Contact Support",
        section: "Help",
        icon: Support,
        handler: () => {
          window.open("mailto:team@deta.sh?subject=Space Alpha", "_blank");
        },
      },
      {
        id: "discord",
        name: "Chat on Discord",
        section: "Help",
        icon: Discord,
        handler: () => {
          window.open("https://go.deta.dev/discord", "_blank");
        },
      }
    );

    // General section
    actions.push({
      id: "theme",
      name: "Change theme ",
      section: "General",
      icon: ColorSwatch,
      nestedSearch: true,
      actionText: "Select theme",
      childActions: [
        {
          id: "theme-light",
          name: "Light",
          icon: Sun,
          handler: () => {
            changeTheme("light");
            return {
              afterClose(teletype: TeletypeSystem) {
                teletype.showSuccess("Theme changed");
              },
            };
          },
        },
        {
          id: "theme-dark",
          name: "Dark",
          icon: Moon,
          handler: () => {
            changeTheme("dark");
            return {
              afterClose(teletype: TeletypeSystem) {
                teletype.showSuccess("Theme changed");
              },
            };
          },
        },
        {
          id: "theme-system",
          name: "System",
          icon: Desktop,
          handler: () => {
            changeTheme(getSystemTheme());
            return {
              afterClose(teletype: TeletypeSystem) {
                teletype.showSuccess("Theme changed");
              },
            };
          },
        },
      ],
    });

    // Login / Logout
    if (isAuthenticated) {
      actions.push({
        id: "logout",
        name: "Logout",
        icon: Logout,
        section: "General",
        view: "ModalSmall",
        actionText: "Confirm",
        childActions: [
          {
            id: "logout-confirm",
            name: "Confirm",
            handler: async () => {
              let success = false;

              try {
                await fetch(import.meta.env.DEV ? "https://deta.space/api/v0/auth/logout" : "/api/v0/auth/logout");
                success = true;
              } catch (error) {
                console.error(error);
              }

              return {
                afterClose(teletype: TeletypeSystem) {
                  if (success) {
                    teletype.showSuccess("Logged out!");
                    setTimeout(() => location.reload(), 1000);
                  } else {
                    teletype.showError("Error logging out!");
                  }
                },
              };
            },
          },
        ],
      });
    } else {
      actions.push({
        id: "login",
        name: "Login",
        icon: Login,
        section: "General",
        handler: () => {
          window.location.href = "/login";
        },
      });
    }
  }
</script>

{#if initialized}
  <TeletypeProvider {actions} options={{ placeholder: "Type a command or search", localSearch: true }}>
    <Teletype />
  </TeletypeProvider>
{/if}

<style>
  :root {
    --click-scale-factor: 0.95;
    --text: #32302f;
    --text-light: #494645;
    --background-dark: #f7f5f2;
    --background-accent: #f0eeea;
    --border-color: #ddd6d088;
    --outline-color: #ddd6d027;
    --primary: #2a62f1;
    --primary-dark: #a48e8e;
    --green: #0ec463;
    --red: #f24441;
    --border-radius: 8px;
  }

  :root.theme-dark {
    --click-scale-factor: 0.95;
    --text: #ddd6d0;
    --text-light: #bcb6b1;
    --background-dark: #191818;
    --background-accent: #32302f;
    --border-color: #32302f83;
    --outline-color: #32302f37;
    --primary: #4d73e0;
    --primary-dark: #a48e8e;
    --green: #0ec463;
    --red: #f24441;
    --border-radius: 8px;
  }

  :global(#teletype-input) {
    font-weight: 400;
    line-height: 21.6px;
    font-feature-settings: "ss05";
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
    -webkit-font-smoothing: antialiased;
  }
</style>
