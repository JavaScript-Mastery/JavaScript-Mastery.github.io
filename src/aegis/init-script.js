import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
  import("aegis-web-sdk").then(({ default: Aegis }) => {
    const aegis = new Aegis({
      id: "kwL2lcKr1KJe8rXnlD",
      uin: "",
      reportApiSpeed: true,
      reportAssetSpeed: true, 
      spa: true,
    });
  });
}
