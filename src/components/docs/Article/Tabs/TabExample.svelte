<script lang="ts">
  import Tabs from "./Tabs.svelte";
  import Tab from "./Tab.svelte";
  import TabContent from "./TabContent.svelte";


</script>

<h1>Tab example</h1>

<Tabs>
    <svelte:fragment slot="tabs">
        <Tab key="tab1">Tab 1</Tab>
        <Tab key="tab2">Tab 2</Tab>
        <Tab key="tab3">Tab 3</Tab>
    </svelte:fragment>
    <svelte:fragment slot="contents">
        <TabContent key="tab1">Tab 1 content</TabContent>
        <TabContent key="tab2">Tab 2 content</TabContent>
        <TabContent key="tab3">Tab 3 content</TabContent>
    </svelte:fragment>
</Tabs>