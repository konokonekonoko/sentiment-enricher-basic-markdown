import patterns from "./enricher-config.mjs";

// Inject Enricher Configs
Hooks.once("init", async () => {
  const displayName = patterns.displayName
  const internalName = displayName.replaceAll(" ","_")

  if (!CONFIG.Sentiment || !CONFIG.Sentiment.EnricherConfigs)
    throw new Error(`Sentiment Enricher Module "${displayName}" cannot be loaded because CONFIG.Sentiment hasn't been initialized.`);

  console.log(`Initializing Sentiment Enricher Module: ${displayName}`)
  CONFIG.Sentiment.EnricherConfigs[internalName] = patterns;
});
